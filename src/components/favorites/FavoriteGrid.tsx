import styles from '../home/PoemsGrid.module.css'
import { PoemCard } from '../home/PoemCard'
import { Poem } from '../../types'
import { useEffect, useState } from 'react'

function FavoriteGrid() {
  const [favorites, setFavorites] = useState<Poem[]>([])

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites')
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites))
    }
  }, [])

  return (
    <div className={styles.grid}>
      {favorites.length > 0 ? (
        favorites.map((poem: Poem) => <PoemCard key={poem.title} poem={poem} />)
      ) : (
        <p className={styles.errorMessage}>You don't have any favorites.</p>
      )}
    </div>
  )
}

export { FavoriteGrid }
