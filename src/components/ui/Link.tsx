import styles from './Button.module.css'
import { LinkProps } from 'react-router-dom'
import { Link as RouterLink } from 'react-router-dom'

function Link({
  className,
  variant = 'default',
  size = 'default',
  ...props
}: {
  variant?: string
  size?: string
} & LinkProps) {
  const variantClasses: { [key: string]: string } = {
    secondary: styles.variantSecondary,
    destructive: styles.variantDestructive,
    outline: styles.variantOutline,
    default: styles.variantDefault,
  }

  const sizeClasses: { [key: string]: string } = {
    sm: styles.sizeSm,
    lg: styles.sizeLg,
    icon: styles.sizeIcon,
    default: styles.sizeDefault,
  }

  let classConstructor =
    styles.button + ' ' + (variantClasses[variant] || variantClasses.default)
  classConstructor += ' ' + (sizeClasses[size] || sizeClasses.default)
  classConstructor += ' ' + (className || '')

  return <RouterLink className={classConstructor} {...props} />
}

export { Link }
