import styles from './Poem.module.css'
import { Suspense } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Poem } from '../../components/poem/Poem'
import { Spinner } from '../../components/ui/Spinner'

export default function PoemPage() {
  const navigate = useNavigate()
  const { poem = '' } = useParams()
  const poemParts = poem.split(';')
  const author = poemParts[0]
  const title = poemParts[1]

  if (!poem) {
    navigate('/')
  }

  return (
    <article>
      <h1>{title}</h1>
      <h2 className={styles.author}>{author}</h2>
      <Suspense fallback={<Spinner className={styles.spin} />}>
        <Poem poemTitle={title} poemAuthor={author} />
      </Suspense>
    </article>
  )
}
