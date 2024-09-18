import styles from './PoemCard.module.css'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/Card'
import { PoemProps } from '../../types'
import { Link } from '../../router'

function PoemCard({
  poem,
  ...props
}: { poem: PoemProps } & React.HTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link
      className={styles.link}
      to={`/poem/${encodeURIComponent(poem.author)};${encodeURIComponent(poem.title)}`}
      {...props}
    >
      <Card className={styles.card}>
        <CardHeader>
          <CardTitle>{poem.title}</CardTitle>
        </CardHeader>
        <CardContent>{poem.author}</CardContent>
        <CardFooter>{poem.linecount} lines</CardFooter>
      </Card>
    </Link>
  )
}

export { PoemCard }
