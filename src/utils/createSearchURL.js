const createSearchURL = (searchQuery, limit, fields, page) => {
  const url = new URL(process.env.SEARCH_API)

  url.searchParams.set('title', searchQuery)
  url.searchParams.set('limit', limit)
  url.searchParams.set('fields', fields)
  url.searchParams.set('page', page)

  return url
}

export { createSearchURL }
