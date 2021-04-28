const normalizeQuery = (query) => {
  return query.trim().split(' ').join('+')
}

export { normalizeQuery }
