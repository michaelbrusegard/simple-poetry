import styles from './Favorites.module.css'
import { FavoriteGrid } from '../../components/favorites/FavoriteGrid'
import { Link } from '../../components/ui/Link'

export default function FavoritesPage() {
  return (
    <>
      <h1>Favorites</h1>
      <Link className={styles.margin} to='/' variant='secondary'>
        Home
      </Link>
      <FavoriteGrid />
    </>
  )
}
