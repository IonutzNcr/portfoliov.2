import type { StackSectionData } from '../types/stack.types'
import { STACK_ICONS } from './stack-icons.data'
import type { PortfolioLanguage } from '../../../types/i18n'

const SHARED_TECHNOLOGIES = [
  { name: 'C', badge: 'C', iconSvg: STACK_ICONS.C },
  { name: 'C++', badge: 'C+', iconSvg: STACK_ICONS['C++'] },
  { name: 'JavaScript', badge: 'JS', iconSvg: STACK_ICONS.JavaScript },
  { name: 'PHP', badge: 'PHP', iconSvg: STACK_ICONS.PHP },
  { name: 'Python', badge: 'PY', iconSvg: STACK_ICONS.Python },
  { name: 'React.js', badge: 'RE', iconSvg: STACK_ICONS['React.js'] },
  { name: 'Next.js', badge: 'NX', iconSvg: STACK_ICONS['Next.js'] },
  { name: 'Git', badge: 'GT', iconSvg: STACK_ICONS.Git },
  { name: 'GitHub', badge: 'GH', iconSvg: STACK_ICONS.GitHub },
  { name: 'Docker', badge: 'DK', iconSvg: STACK_ICONS.Docker },
  { name: 'Figma', badge: 'FG', iconSvg: STACK_ICONS.Figma },
  { name: 'Linux', badge: 'LX', iconSvg: STACK_ICONS.Linux },
]

export const STACK_SECTION_CONTENT: Record<PortfolioLanguage, StackSectionData> = {
  fr: {
    kicker: 'Compétences',
    title: 'Stack & Technologies',
    gridAriaLabel: 'Stack et technologies',
    description:
      'Compétences articulées autour de la rigueur de la programmation système bas niveau, des architectures web modernes et de l’outillage d’ingénierie logicielle.',
    technologies: SHARED_TECHNOLOGIES,
  },
  en: {
    kicker: 'Skills',
    title: 'Stack & Technologies',
    gridAriaLabel: 'Stack and technologies',
    description:
      'Skills built around low-level systems programming rigor, modern web architectures, and practical software engineering tooling.',
    technologies: SHARED_TECHNOLOGIES,
  },
}
