import { useState, useEffect } from 'react'
import styles from './Poems.module.css'
import { useQuery } from '@tanstack/react-query'
import { PoemCard } from './PoemCard'
import { fetchPoems } from './poemsquery'
import { Button } from '../ui/Button'
import { Spinner } from '../ui/Spinner'

function PoemsCarousel({
  searchTerm,
  selectedAuthor,
}: {
  searchTerm: string
  selectedAuthor: string
}) {
  const poems = useQuery({
    queryKey: ['poems', searchTerm, selectedAuthor],
    queryFn: () => fetchPoems(searchTerm, selectedAuthor),
  })

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    setCurrentIndex(0)
  }, [searchTerm, selectedAuthor])

  const prevPoem = () => {
    setCurrentIndex((oldIndex) => Math.max(0, oldIndex - 1))
  }

  const nextPoem = () => {
    setCurrentIndex((oldIndex) => Math.min(poems.data.length - 1, oldIndex + 1))
  }

  if (poems.error) {
    return <p className={styles.errorMessage}>Error: {poems.error.message}</p>
  }

  if (
    !poems.isLoading &&
    (!Array.isArray(poems.data) || poems.data.length === 0)
  ) {
    return <p className={styles.errorMessage}>No poems found...</p>
  }

  return (
    <div className={styles.carousel}>
      <Button
        className={styles.carouselButton}
        variant='outline'
        size='icon'
        onClick={prevPoem}
        disabled={currentIndex === 0}
      >
        Prev
      </Button>
      {poems.isLoading ? (
        <Spinner />
      ) : (
        <PoemCard
          key={poems.data[currentIndex].title}
          className={styles.carouselPoem}
          poem={poems.data[currentIndex]}
        />
      )}
      <Button
        className={styles.carouselButton}
        variant='outline'
        size='icon'
        onClick={nextPoem}
        disabled={poems.isLoading || currentIndex === poems.data.length - 1}
      >
        Next
      </Button>
    </div>
  )
}

export { PoemsCarousel }
