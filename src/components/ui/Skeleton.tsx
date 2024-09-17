import styles from './Skeleton.module.css'

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  let classConstructor = styles.skeleton
  classConstructor += ' ' + (className || '')
  return <div className={classConstructor} {...props} />
}

export { Skeleton }
