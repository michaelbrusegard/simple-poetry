import styles from './Spinner.module.css'

function Spinner({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  let classConstructor = styles.wrapper
  classConstructor += ' ' + (className || '')
  return (
    <div className={classConstructor} {...props}>
      <div className={styles.spinner}></div>
    </div>
  )
}

export { Spinner }
