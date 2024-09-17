import styles from './Card.module.css'

function Card({
  className,
  ...props
}: { className?: string } & React.HTMLAttributes<HTMLDivElement>) {
  let classConstructor = styles['card']
  classConstructor += ' ' + (className || '')
  return <div className={classConstructor} {...props} />
}

function CardHeader({
  className,
  ...props
}: { className?: string } & React.HTMLAttributes<HTMLDivElement>) {
  let classConstructor = styles['card-header']
  classConstructor += ' ' + (className || '')
  return <div className={classConstructor} {...props} />
}

function CardTitle({
  className,
  ...props
}: { className?: string } & React.HTMLAttributes<HTMLHeadingElement>) {
  let classConstructor = styles['card-title']
  classConstructor += ' ' + (className || '')
  return <h3 className={classConstructor} {...props} />
}

function CardDescription({
  className,
  ...props
}: { className?: string } & React.HTMLAttributes<HTMLParagraphElement>) {
  let classConstructor = styles['card-description']
  classConstructor += ' ' + (className || '')
  return <p className={classConstructor} {...props} />
}

function CardContent({
  className,
  ...props
}: { className?: string } & React.HTMLAttributes<HTMLDivElement>) {
  let classConstructor = styles['card-content']
  classConstructor += ' ' + (className || '')
  return <div className={classConstructor} {...props} />
}

function CardFooter({
  className,
  ...props
}: { className?: string } & React.HTMLAttributes<HTMLDivElement>) {
  let classConstructor = styles['card-footer']
  classConstructor += ' ' + (className || '')
  return <div className={classConstructor} {...props} />
}

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
