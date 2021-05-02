const createBookCoverURL = (isbn) => {
  return process.env.BOOK_COVER_API.replace('${isbn}', isbn)
}

export { createBookCoverURL }
