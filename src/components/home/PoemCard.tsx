import styles from './PoemCard.module.css'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/Card'
import { Link } from 'react-router-dom'
import { PoemProps } from '../../types'

function PoemCard({
  poem,
  ...props
}: { poem: PoemProps } & React.HTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link
      className={styles.link}
      to={`/poem/${encodeURIComponent(poem.title)}`}
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
