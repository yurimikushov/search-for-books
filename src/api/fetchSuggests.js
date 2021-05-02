import {
  abortFetch,
  normalizeQuery,
  createSearchURL,
  abortableFetch,
  docToSuggest,
} from '../utils'

const options = {
  limit: 5,
  fields: ['title'],
  page: 1,
}

const EVENT_NAME_OF_FETCHING_SUGGESTS = 'fetchSuggests'

const fetchSuggests = async (query) => {
  abortFetch(EVENT_NAME_OF_FETCHING_SUGGESTS)

  const normalizedQuery = normalizeQuery(query)

  if (normalizedQuery.length === 0) {
    return []
  }

  const { limit, fields, page } = options

  const url = createSearchURL(normalizedQuery, limit, fields.join(','), page)

  const res = await abortableFetch(url, {
    name: EVENT_NAME_OF_FETCHING_SUGGESTS,
  })

  const { docs } = await res.json()
  const suggests = docs.map(docToSuggest)

  return suggests
}

export { fetchSuggests }
