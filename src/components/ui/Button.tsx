import styles from './Button.module.css'

function Button({
  className,
  variant = 'default',
  size = 'default',
  ...props
}: {
  className?: string
  variant?: string
  size?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const variantClasses: { [key: string]: string } = {
    secondary: styles['variant-secondary'],
    destructive: styles['variant-destructive'],
    outline: styles['variant-outline'],
    default: styles['variant-default'],
  }

  const sizeClasses: { [key: string]: string } = {
    sm: styles['size-sm'],
    lg: styles['size-lg'],
    icon: styles['size-icon'],
    default: styles['size-default'],
  }

  let classConstructor =
    styles['button'] + ' ' + (variantClasses[variant] || variantClasses.default)
  classConstructor += ' ' + (sizeClasses[size] || sizeClasses.default)
  classConstructor += ' ' + (className || '')

  return <button className={classConstructor} {...props} />
}

export { Button }
