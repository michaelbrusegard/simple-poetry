import styles from './Input.module.css'

function Input({
  className,
  type,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  let classConstructor = styles.input
  classConstructor += ' ' + (className || '')
  return <input className={classConstructor} type={type} {...props} />
}

export { Input }
