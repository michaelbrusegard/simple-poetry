import styles from './Poem.module.css'
import { useParams } from 'react-router-dom'
import { Poem } from '../../components/poem/Poem'
import { Suspense } from 'react'
import { Spinner } from '../../components/ui/Spinner'

export default function PoemPage() {
  const { poemName = '' } = useParams()
  const decodedPoemName = decodeURIComponent(poemName)
  const poemAuthor = sessionStorage.getItem('selectedAuthor') || ''

  return (
    <article>
      <h1>{decodedPoemName}</h1>
      <Suspense fallback={<Spinner className={styles.spin} />}>
        <Poem poemTitle={decodedPoemName} poemAuthor={poemAuthor} />
      </Suspense>
    </article>
  )
}
