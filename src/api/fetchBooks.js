import { normalizeQuery, createSearchURL } from '../utils'

const initialOptions = {
  limit: 15,
  fields: ['title'],
  page: 1,
}

const fetchBooks = async (query, options = {}) => {
  const { limit, fields, page } = {
    ...initialOptions,
    ...options,
  }

  const normalizedQuery = normalizeQuery(query)

  if (normalizedQuery.length === 0) {
    throw new Error('An empty search query is specified')
  }

  const url = createSearchURL(normalizedQuery, limit, fields.join(','), page)
  const res = await fetch(url)

  return await res.json()
}

export { fetchBooks }
