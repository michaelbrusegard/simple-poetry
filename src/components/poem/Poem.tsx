import styles from './Poem.module.css'
import { useSuspenseQuery } from '@tanstack/react-query'

function Poem({
  poemTitle,
  poemAuthor,
}: {
  poemTitle: string
  poemAuthor: string
}) {
  const poem = useSuspenseQuery({
    queryKey: ['poem', poemTitle, poemAuthor],
    queryFn: async () => {
      const response = await fetch(
        `https://poetrydb.org/author,title/${poemAuthor};${poemTitle}/lines,author`,
      )
      return response.json()
    },
  })
  return (
    <>
      <h2 className={styles.author}>{poem.data[0].author}</h2>
      <p className={styles.lines}>{poem.data[0].lines.join('\n')}</p>
    </>
  )
}

export { Poem }
