import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'

function loadCssWithImports(entryPath: string): string {
  const css = readFileSync(entryPath, 'utf8')
  const importRegex = /@import\s+['\"](.+?)['\"];?/g
  const chunks: string[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = importRegex.exec(css)) !== null) {
    chunks.push(css.slice(lastIndex, match.index))
    const importedPath = resolve(dirname(entryPath), match[1])
    chunks.push(loadCssWithImports(importedPath))
    lastIndex = importRegex.lastIndex
  }

  chunks.push(css.slice(lastIndex))
  return chunks.join('\n')
}

describe('HomePage responsive styles', () => {
  const cssPath = resolve(import.meta.dirname, 'HomePage.css')
  const css = loadCssWithImports(cssPath)

  it('centers the profile hero on tablet and mobile breakpoints', () => {
    expect(css).toMatch(/@media \(max-width: 1024px\)[\s\S]*?\.profile-section__hero \{[\s\S]*?align-items: center;/)
    expect(css).toMatch(/@media \(max-width: 1024px\)[\s\S]*?\.profile-section__copy \{[\s\S]*?text-align: center;/)
    expect(css).toMatch(/@media \(max-width: 1024px\)[\s\S]*?\.profile-section__cta \{[\s\S]*?justify-content: center;/)
    expect(css).toMatch(/@media \(max-width: 640px\)[\s\S]*?\.profile-section__availability \{[\s\S]*?justify-content: center;/)
  })

  it('shrinks language switcher and technology cards on small screens', () => {
    expect(css).toMatch(/@media \(max-width: 820px\)[\s\S]*?\.language-switcher__trigger \{[\s\S]*?font-size: 11px;/)
    expect(css).toMatch(/@media \(max-width: 640px\)[\s\S]*?\.language-switcher__trigger \{[\s\S]*?font-size: 10px;/)
    expect(css).toMatch(/@media \(max-width: 640px\)[\s\S]*?\.stack-card \{[\s\S]*?padding: 16px;/)
    expect(css).toMatch(/@media \(max-width: 640px\)[\s\S]*?\.stack-card__icon \{[\s\S]*?width: 26px;/)
    expect(css).toMatch(/@media \(max-width: 640px\)[\s\S]*?\.stack-card__name \{[\s\S]*?font-size: 12px;/)
  })

  it('compacts the navbar on smaller screens to prevent overflow', () => {
    expect(css).toMatch(/@media \(max-width: 820px\)[\s\S]*?\.site-header__name,[\s\S]*?text-overflow: ellipsis;/)
    expect(css).toMatch(/@media \(max-width: 820px\)[\s\S]*?\.site-header__contact \{[\s\S]*?padding: 6px 10px;/)
    expect(css).toMatch(/@media \(max-width: 640px\)[\s\S]*?\.site-header__school \{[\s\S]*?display: none;/)
    expect(css).toMatch(/@media \(max-width: 640px\)[\s\S]*?\.site-header__initials \{[\s\S]*?width: 32px;/)
    expect(css).toMatch(/@media \(max-width: 640px\)[\s\S]*?\.site-header__contact \{[\s\S]*?font-size: 11px;/)
  })

  it('reduces the technology grid columns progressively across breakpoints', () => {
    expect(css).toMatch(/\.stack-section__grid \{[\s\S]*?grid-template-columns: repeat\(6, minmax\(0, 1fr\)\);/)
    expect(css).toMatch(/@media \(max-width: 1024px\)[\s\S]*?\.stack-section__grid \{[\s\S]*?grid-template-columns: repeat\(4, minmax\(0, 1fr\)\);/)
    expect(css).toMatch(/@media \(max-width: 820px\)[\s\S]*?\.stack-section__grid \{[\s\S]*?grid-template-columns: repeat\(3, minmax\(0, 1fr\)\);/)
    expect(css).toMatch(/@media \(max-width: 640px\)[\s\S]*?\.stack-section__grid \{[\s\S]*?grid-template-columns: repeat\(2, minmax\(0, 1fr\)\);/)
  })
})
