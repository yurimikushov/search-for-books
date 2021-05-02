import {
  abortFetch,
  normalizeQuery,
  createSearchURL,
  abortableFetch,
  docToBook,
} from '../utils'

const options = {
  limit: process.env.NUM_OF_BOOK_PER_PAGE,
  fields: ['title', 'author_name', 'isbn', 'publisher', 'publish_date'],
  page: 1,
}

const EVENT_NAME_OF_FETCHING_BOOKS = 'fetchBooks'

const fetchBooks = async (query) => {
  abortFetch(EVENT_NAME_OF_FETCHING_BOOKS)

  const normalizedQuery = normalizeQuery(query)

  if (normalizedQuery.length === 0) {
    return {
      numFound: 0,
      books: [],
    }
  }

  const { limit, fields, page } = options

  const url = createSearchURL(normalizedQuery, limit, fields.join(','), page)

  const res = await abortableFetch(url, {
    name: EVENT_NAME_OF_FETCHING_BOOKS,
  })

  const { numFound, docs } = await res.json()
  const books = docs.map(docToBook)

  return {
    numFound,
    books,
  }
}

export { fetchBooks }
