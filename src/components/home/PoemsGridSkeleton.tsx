import styles from './PoemsGridSkeleton.module.css'
import { Skeleton } from '../ui/Skeleton'

function PoemsGridSkeleton() {
  return (
    <div className={styles.grid}>
      {Array.from({ length: 12 }).map((_, index) => (
        <Skeleton className={styles.card} key={index} />
      ))}
    </div>
  )
}

export { PoemsGridSkeleton }
