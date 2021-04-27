const fetchSuggests = async (query) => {
  const normalizedQuery = query.trim().split(' ').join('+')
  const url = `https://openlibrary.org/search.json?title=${normalizedQuery}`

  const res = await fetch(url)

  return await res.json()
}

export { fetchSuggests }
