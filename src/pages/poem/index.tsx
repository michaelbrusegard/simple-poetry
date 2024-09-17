import styles from './Poem.module.css'
import { Suspense } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Poem } from '../../components/poem/Poem'
import { Spinner } from '../../components/ui/Spinner'

export default function PoemPage() {
  const navigate = useNavigate()
  const { poemName = '' } = useParams()
  const decodedPoemName = decodeURIComponent(poemName)
  const poemAuthor = sessionStorage.getItem('selectedAuthor') || ''

  if (!decodedPoemName || !poemAuthor) {
    navigate('/')
  }

  return (
    <article>
      <h1>{decodedPoemName}</h1>
      <Suspense fallback={<Spinner className={styles.spin} />}>
        <Poem poemTitle={decodedPoemName} poemAuthor={poemAuthor} />
      </Suspense>
    </article>
  )
}
