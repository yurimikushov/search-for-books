import {
  normalizeSearchQuery,
  createSearchURL,
  abortableFetch,
  docToBook,
} from 'utils'

const NUM_OF_BOOK_PER_PAGE = 30

const options = {
  limit: NUM_OF_BOOK_PER_PAGE,
  fields: ['title', 'author_name', 'isbn', 'publisher', 'publish_date'],
}

const fetchBooks = async (searchQuery, { name, page = 1 }) => {
  const normalizedQuery = normalizeSearchQuery(searchQuery)

  if (normalizedQuery.length === 0) {
    return {
      numPages: 0,
      books: [],
    }
  }

  const { limit, fields } = options

  const url = createSearchURL(normalizedQuery, limit, fields.join(','), page)

  const res = await abortableFetch(url, {
    name,
  })

  const { numFound, docs } = await res.json()
  const books = docs.map(docToBook)

  return {
    numPages: Math.ceil(numFound / NUM_OF_BOOK_PER_PAGE),
    books,
  }
}

export { fetchBooks }
