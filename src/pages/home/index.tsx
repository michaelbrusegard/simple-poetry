import styles from './Home.module.css'
import { Suspense, useState, useEffect } from 'react'
import { Input } from '../../components/ui/Input'
import { Select, SelectOption } from '../../components/ui/Select'
import { Link } from '../../components/ui/Link'
import { PoemsGrid } from '../../components/home/PoemsGrid'
import { PoemsGridSkeleton } from '../../components/home/PoemsGridSkeleton'
import { PoemsCarousel } from '../../components/home/PoemsCarousel'

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState(
    () => sessionStorage.getItem('searchTerm') || '',
  )
  const [selectedAuthor, setSelectedAuthor] = useState(
    () => sessionStorage.getItem('selectedAuthor') || 'William Shakespeare',
  )
  const [selectedView, setSelectedView] = useState(
    () => sessionStorage.getItem('selectedView') || 'grid',
  )

  useEffect(() => {
    sessionStorage.setItem('searchTerm', searchTerm)
  }, [searchTerm])

  useEffect(() => {
    sessionStorage.setItem('selectedAuthor', selectedAuthor)
  }, [selectedAuthor])

  useEffect(() => {
    sessionStorage.setItem('selectedView', selectedView)
  }, [selectedView])

  return (
    <>
      <h1>Find Poetry</h1>
      <header className={styles.header}>
        <div className={styles.groupWrapper}>
          <Select
            label='Select an author'
            value={selectedAuthor}
            onChange={(e) => setSelectedAuthor(e.target.value)}
          >
            <SelectOption value='William Blake'>Blake</SelectOption>
            <SelectOption value='Emily Dickinson'>Dickinson</SelectOption>
            <SelectOption value='Christina Rossetti'>Rossetti</SelectOption>
            <SelectOption value='William Shakespeare'>Shakespeare</SelectOption>
            <SelectOption value='Walt Whitman'>Whitman</SelectOption>
          </Select>
          <Input
            className={styles.searchBar}
            placeholder='Search for a poem...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          ></Input>
        </div>
        <div className={styles.groupWrapper}>
          <Select
            label='Select a view'
            value={selectedView}
            onChange={(e) => setSelectedView(e.target.value)}
          >
            <SelectOption value='carousel'>Carousel</SelectOption>
            <SelectOption value='grid'>Grid</SelectOption>
          </Select>
          <Link to='/favorites'>Favorites</Link>
        </div>
      </header>
      {selectedView === 'carousel' ? (
        <PoemsCarousel
          searchTerm={searchTerm}
          selectedAuthor={selectedAuthor}
        />
      ) : (
        <Suspense fallback={<PoemsGridSkeleton />}>
          <PoemsGrid searchTerm={searchTerm} selectedAuthor={selectedAuthor} />
        </Suspense>
      )}
    </>
  )
}
