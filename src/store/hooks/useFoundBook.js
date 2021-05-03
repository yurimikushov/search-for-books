import { useSelector } from 'react-redux'

const useFoundBook = (bookId) => {
  return useSelector(({ foundBooks }) => {
    if (!bookId) {
      return null
    }

    return foundBooks.books.find((book) => book.id === bookId)
  })
}

export { useFoundBook }
