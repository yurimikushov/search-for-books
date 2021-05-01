const extractFirstISBN = (ISBNs) => {
  if (ISBNs && ISBNs.length > 0) {
    return ISBNs[0]
  }

  return ''
}

export { extractFirstISBN }
