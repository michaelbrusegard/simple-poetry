import styles from './Poem.module.css'
import { Suspense, useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Poem } from '../../components/poem/Poem'
import { Button } from '../../components/ui/Button'
import { Spinner } from '../../components/ui/Spinner'
import { StoragePoem } from './types'

export default function PoemPage() {
  const navigate = useNavigate()
  const { poemName = '' } = useParams()
  const decodedPoemName = decodeURIComponent(poemName)
  const poemAuthor = sessionStorage.getItem('selectedAuthor') || ''

  if (!decodedPoemName || !poemAuthor) {
    navigate('/')
  }

  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
    setIsFavorite(
      favorites.some(
        (fav: StoragePoem) =>
          fav.title === decodedPoemName && fav.author === poemAuthor,
      ),
    )
  }, [decodedPoemName, poemAuthor])

  const handleFavoriteClick = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
    if (isFavorite) {
      const newFavorites = favorites.filter(
        (fav: StoragePoem) =>
          !(fav.title === decodedPoemName && fav.author === poemAuthor),
      )
      localStorage.setItem('favorites', JSON.stringify(newFavorites))
    } else {
      favorites.push({ name: decodedPoemName, author: poemAuthor })
      localStorage.setItem('favorites', JSON.stringify(favorites))
    }
    setIsFavorite(!isFavorite)
  }

  return (
    <article>
      <h1>{decodedPoemName}</h1>
      <Suspense fallback={<Spinner className={styles.spin} />}>
        <Poem poemTitle={decodedPoemName} poemAuthor={poemAuthor} />
        <div className={styles.buttonWrapper}>
          <Button variant='secondary' onClick={() => navigate('/')}>
            Back
          </Button>
          <Button
            variant={isFavorite ? 'destructive' : 'default'}
            onClick={handleFavoriteClick}
          >
            {isFavorite ? 'Remove Favorite' : 'Favorite'}
          </Button>
        </div>
      </Suspense>
    </article>
  )
}
