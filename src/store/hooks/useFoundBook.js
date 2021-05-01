import { useSelector } from 'react-redux'

const useFoundBook = (bookId) => {
  return useSelector(({ foundBooks }) => {
    if (!bookId) {
      return null
    }

    return foundBooks.books.filter((book) => book.id === bookId)[0]
  })
}

export { useFoundBook }
