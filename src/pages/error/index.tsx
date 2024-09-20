import styles from '../not-found/NotFound.module.css'
import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()

  console.error(error)

  let errorMessage = ''
  if (error instanceof Error) {
    errorMessage = error.message
  } else if (error instanceof Response) {
    errorMessage = error.statusText
  }

  return (
    <>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className={styles.text}>
        <i>{errorMessage}</i>
      </p>
    </>
  )
}
