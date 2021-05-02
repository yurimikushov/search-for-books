const createSearchURL = (query, limit, fields, page) => {
  const url = new URL('https://openlibrary.org/search.json')

  url.searchParams.set('title', query)
  url.searchParams.set('limit', limit)
  url.searchParams.set('fields', fields)
  url.searchParams.set('page', page)

  return url
}

export { createSearchURL }
