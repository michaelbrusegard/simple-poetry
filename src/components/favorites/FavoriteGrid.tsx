import styles from '../home/Poems.module.css'
import { PoemCard } from '../home/PoemCard'
import { PoemProps } from '../../types'
import { useEffect, useState } from 'react'

function FavoriteGrid() {
  const [favorites, setFavorites] = useState<PoemProps[]>([])

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites')
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites))
    }
  }, [])

  return (
    <div className={styles.grid}>
      {favorites.length > 0 ? (
        favorites.map((poem: PoemProps) => (
          <PoemCard key={poem.title} poem={poem} />
        ))
      ) : (
        <p className={styles.errorMessage}>You don't have any favorites.</p>
      )}
    </div>
  )
}

export { FavoriteGrid }