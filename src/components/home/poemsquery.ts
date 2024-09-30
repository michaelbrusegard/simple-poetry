async function fetchPoems(searchTerm: string, selectedAuthor: string) {
  let response
  if (searchTerm) {
    response = await fetch(
      `https://poetrydb.org/author,title/${selectedAuthor};${searchTerm}/author,title,linecount`,
    )
  } else {
    response = await fetch(
      `https://poetrydb.org/author,poemcount/${selectedAuthor};32/author,title,linecount`,
    )
  }
  return response.json()
}

export { fetchPoems }
