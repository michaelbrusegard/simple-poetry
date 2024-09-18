import styles from './Home.module.css'
import { Suspense, useState, useEffect } from 'react'
import { Input } from '../../components/ui/Input'
import { Select, SelectOption } from '../../components/ui/Select'
import { Link } from '../../components/ui/Link'
import { PoemsGrid } from '../../components/home/PoemsGrid'
import { PoemsGridSkeleton } from '../../components/home/PoemsGridSkeleton'

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState(
    () => sessionStorage.getItem('searchTerm') || '',
  )
  const [selectedAuthor, setSelectedAuthor] = useState(
    () => sessionStorage.getItem('selectedAuthor') || 'shakespeare',
  )

  useEffect(() => {
    sessionStorage.setItem('searchTerm', searchTerm)
  }, [searchTerm])

  useEffect(() => {
    sessionStorage.setItem('selectedAuthor', selectedAuthor)
  }, [selectedAuthor])

  return (
    <>
      <h1>Find Poetry</h1>
      <header className={styles.header}>
        <div className={styles.groupWrapper}>
          <Select
            value={selectedAuthor}
            onChange={(e) => setSelectedAuthor(e.target.value)}
          >
            <SelectOption value='blake'>Blake</SelectOption>
            <SelectOption value='dickinson'>Dickinson</SelectOption>
            <SelectOption value='rossetti'>Rossetti</SelectOption>
            <SelectOption value='shakespeare'>Shakespeare</SelectOption>
            <SelectOption value='whitman'>Whitman</SelectOption>
          </Select>
          <Input
            className={styles.searchBar}
            placeholder='Search for a poem...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          ></Input>
        </div>
        <div className={styles.groupWrapper}>
          <Link to='/favorites'>Favorites</Link>
        </div>
      </header>
      <Suspense fallback={<PoemsGridSkeleton />}>
        <PoemsGrid searchTerm={searchTerm} selectedAuthor={selectedAuthor} />
      </Suspense>
    </>
  )
}
