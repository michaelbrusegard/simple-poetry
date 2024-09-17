import styles from './Poem.module.css'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSuspenseQuery } from '@tanstack/react-query'
import { Button } from '../../components/ui/Button'
import { PoemProps } from '../../types'

function Poem({
  poemTitle,
  poemAuthor,
}: {
  poemTitle: string
  poemAuthor: string
}) {
  const navigate = useNavigate()
  const poem = useSuspenseQuery({
    queryKey: ['poem', poemTitle, poemAuthor],
    queryFn: async () => {
      const response = await fetch(
        `https://poetrydb.org/author,title/${poemAuthor};${poemTitle}/lines,author,linecount`,
      )
      return response.json()
    },
  })

  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
    setIsFavorite(
      favorites.some(
        (fav: PoemProps) =>
          fav.title === poemTitle &&
          fav.author === poem.data[0].author &&
          fav.linecount === poem.data[0].linecount,
      ),
    )
  }, [poem])

  const handleFavoriteClick = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
    if (isFavorite) {
      const newFavorites = favorites.filter(
        (fav: PoemProps) =>
          !(
            fav.title === poemTitle &&
            fav.author === poem.data[0].author &&
            fav.linecount === poem.data[0].linecount
          ),
      )
      localStorage.setItem('favorites', JSON.stringify(newFavorites))
    } else {
      favorites.push({
        title: poemTitle,
        author: poem.data[0].author,
        linecount: poem.data[0].linecount,
      })
      localStorage.setItem('favorites', JSON.stringify(favorites))
    }
    setIsFavorite(!isFavorite)
  }
  return (
    <>
      <h2 className={styles.author}>{poem.data[0].author}</h2>
      <p className={styles.lines}>{poem.data[0].lines.join('\n')}</p>
      <div className={styles.buttonWrapper}>
        <Button variant='secondary' onClick={() => navigate(-1)}>
          Back
        </Button>
        <Button
          variant={isFavorite ? 'destructive' : 'default'}
          onClick={handleFavoriteClick}
        >
          {isFavorite ? 'Remove Favorite' : 'Favorite'}
        </Button>
      </div>
    </>
  )
}

export { Poem }
