import { useParams } from 'react-router-dom'

export default function PoemPage() {
  const { poemName = '' } = useParams()
  const decodedPoemName = decodeURIComponent(poemName)

  return (
    <div>
      <h1>{decodedPoemName}</h1>
    </div>
  )
}
