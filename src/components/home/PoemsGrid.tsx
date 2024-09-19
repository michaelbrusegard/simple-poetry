import styles from './Poems.module.css'
import { useSuspenseQuery } from '@tanstack/react-query'
import { PoemCard } from './PoemCard'
import { PoemProps } from '../../types'
import { fetchPoems } from './poemsquery'

function PoemsGrid({
  searchTerm,
  selectedAuthor,
}: {
  searchTerm: string
  selectedAuthor: string
}) {
  const poems = useSuspenseQuery({
    queryKey: ['poems', searchTerm, selectedAuthor],
    queryFn: () => fetchPoems(searchTerm, selectedAuthor),
  })

  if (poems.error) {
    return <p className={styles.errorMessage}>Error: {poems.error.message}</p>
  }

  if (!Array.isArray(poems.data) || poems.data.length === 0) {
    return <p className={styles.errorMessage}>No poems found...</p>
  }

  return (
    <div className={styles.grid}>
      {poems.data.map((poem: PoemProps) => (
        <PoemCard key={poem.title} poem={poem} />
      ))}
    </div>
  )
}

export { PoemsGrid }
