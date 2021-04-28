import { normalizeQuery } from '../utils'

const fetchBooks = async (query) => {
  const normalizedQuery = normalizeQuery(query)

  if (normalizedQuery.length === 0) {
    throw new Error('An empty search query is specified')
  }

  const url = `https://openlibrary.org/search.json?title=${normalizedQuery}`

  const res = await fetch(url)

  return await res.json()
}

export { fetchBooks }
