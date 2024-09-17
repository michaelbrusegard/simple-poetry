import { useSuspenseQuery } from '@tanstack/react-query'
function PoemsGrid({
  searchTerm,
  selectedAuthor,
}: {
  searchTerm: string
  selectedAuthor: string
}) {
  const poems = useSuspenseQuery({
    queryKey: ['poems', searchTerm, selectedAuthor],
    queryFn: async () => {
      let response
      if (searchTerm) {
        response = await fetch(
          `https://poetrydb.org/author,title,poemcount/${selectedAuthor};${searchTerm};5/author,title`,
        )
      } else {
        response = await fetch(
          `https://poetrydb.org/author,poemcount/${selectedAuthor};5/author,title`,
        )
      }
      return response.json()
    },
  })
  return <div>{JSON.stringify(poems.data)}</div>
}

export { PoemsGrid }
