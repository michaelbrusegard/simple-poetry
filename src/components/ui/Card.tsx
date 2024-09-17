import styles from './Card.module.css'

function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  let classConstructor = styles.card
  classConstructor += ' ' + (className || '')
  return <div className={classConstructor} {...props} />
}

function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  let classConstructor = styles.cardHeader
  classConstructor += ' ' + (className || '')
  return <div className={classConstructor} {...props} />
}

function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  let classConstructor = styles.cardTitle
  classConstructor += ' ' + (className || '')
  return <h3 className={classConstructor} {...props} />
}

function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  let classConstructor = styles.cardDescription
  classConstructor += ' ' + (className || '')
  return <p className={classConstructor} {...props} />
}

function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  let classConstructor = styles.cardContent
  classConstructor += ' ' + (className || '')
  return <div className={classConstructor} {...props} />
}

function CardFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  let classConstructor = styles.cardFooter
  classConstructor += ' ' + (className || '')
  return <div className={classConstructor} {...props} />
}

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
