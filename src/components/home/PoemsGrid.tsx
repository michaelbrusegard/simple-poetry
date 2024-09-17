import styles from './PoemsGrid.module.css'
import { useSuspenseQuery } from '@tanstack/react-query'
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
} from '../ui/Card'

type Poem = {
  title: string
  author: string
  linecount: number
}

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
    return (
      <div className={styles.errorMessage}>Error: {poems.error.message}</div>
    )
  }

  if (!Array.isArray(poems.data) || poems.data.length === 0) {
    return <div className={styles.errorMessage}>No poems found...</div>
  }

  return (
    <div className={styles.grid}>
      {poems.data.map((poem: Poem) => (
        <Card className={styles.card} key={poem.title}>
          <CardHeader>
            <CardTitle>{poem.title}</CardTitle>
          </CardHeader>
          <CardContent>{poem.author}</CardContent>
          <CardFooter>{poem.linecount} lines</CardFooter>
        </Card>
      ))}
    </div>
  )
}

export { PoemsGrid }
