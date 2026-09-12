type ButtonProps = {
  label: string
  variant?: 'primary' | 'secondary'
  href?: string
}

export function Button({ label, variant = 'primary', href }: ButtonProps) {
  const className = `button button--${variant}`

  if (href) {
    return (
      <a className={className} href={href}>
        {label}
      </a>
    )
  }

  return <button className={className} type="button">{label}</button>
}
