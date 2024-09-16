import React from 'react'
import styles from './Button.module.css'

function Button({
  variant = 'default',
  size = 'default',
  children,
}: {
  variant?: string
  size?: string
  children: React.ReactNode
}) {
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

  let className =
    styles['button'] + ' ' + (variantClasses[variant] || variantClasses.default)
  className += ' ' + (sizeClasses[size] || sizeClasses.default)

  return <button className={className}>{children}</button>
}

export { Button }
