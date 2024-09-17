import styles from './PoemsGrid.module.css'
import { useSuspenseQuery } from '@tanstack/react-query'
import { PoemCard } from './PoemCard'
import { PoemProps } from '../../types'

function PoemsGrid({
  searchTerm,
  selectedAuthor,
}: {
  searchTerm: string
  selectedAuthor: string
}) {
  const poems = useSuspenseQuery({
    queryKey: ['poems', searchTerm, selectedAuthor],
    queryFn: async () => {
      let response
      if (searchTerm) {
        response = await fetch(
          `https://poetrydb.org/author,title/${selectedAuthor};${searchTerm}/author,title,linecount`,
        )
      } else {
        response = await fetch(
          `https://poetrydb.org/author,poemcount/${selectedAuthor};12/author,title,linecount`,
        )
      }
      return response.json()
    },
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
