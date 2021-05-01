const extractFirstAuthor = (authors) => {
  if (authors && authors.length > 0) {
    return authors[0]
  }

  return ''
}

export { extractFirstAuthor }
