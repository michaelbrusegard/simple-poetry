import styles from './Home.module.css'
import { Suspense, useState } from 'react'
import { Input } from '../../components/ui/Input'
import { Select, SelectOption } from '../../components/ui/Select'
import { PoemsGrid } from '../../components/home/PoemsGrid'
import { PoemsGridSkeleton } from '../../components/home/PoemsGridSkeleton'

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedAuthor, setSelectedAuthor] = useState('shakespeare')
  return (
    <>
      <h1>Find Poetry</h1>
      <header className={styles.header}>
        <Input
          className={styles.searchBar}
          placeholder='Search for a poem...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></Input>
        <Select
          value={selectedAuthor}
          onChange={(e) => setSelectedAuthor(e.target.value)}
        >
          <SelectOption value='shakespeare'>Shakespeare</SelectOption>
          <SelectOption value='dickinson'>Dickinson</SelectOption>
          <SelectOption value='blake'>Blake</SelectOption>
          <SelectOption value='whitman'>Whitman</SelectOption>
        </Select>
      </header>
      <Suspense fallback={<PoemsGridSkeleton />}>
        <PoemsGrid searchTerm={searchTerm} selectedAuthor={selectedAuthor} />
      </Suspense>
    </>
  )
}
