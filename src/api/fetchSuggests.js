import {
  normalizeSearchQuery,
  createSearchURL,
  abortableFetch,
  docToSuggest,
} from 'utils'

const options = {
  limit: 5,
  fields: ['title', 'author_name'],
  page: 1,
}

const fetchSuggests = async (searchQuery, { name }) => {
  const normalizedQuery = normalizeSearchQuery(searchQuery)

  if (normalizedQuery.length === 0) {
    return []
  }

  const { limit, fields, page } = options

  const url = createSearchURL(normalizedQuery, limit, fields.join(','), page)

  const res = await abortableFetch(url, {
    name,
  })

  const { docs } = await res.json()
  const suggests = docs.map(docToSuggest)

  return suggests
}

export { fetchSuggests }
