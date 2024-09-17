import styles from './NotFound.module.css'

export default function NotFoundPage() {
  return (
    <>
      <h1>404 Not Found</h1>
      <p className={styles.text}>The page you're looking for doesn't exist.</p>
    </>
  )
}
