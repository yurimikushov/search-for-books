const normalizeSearchQuery = (searchQuery) => {
  return searchQuery.trim().split(' ').join('+')
}

export { normalizeSearchQuery }
