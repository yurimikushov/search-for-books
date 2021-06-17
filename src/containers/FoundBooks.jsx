import React from 'react'
import { useFetchBooks } from 'hooks'
import { useFoundBooks, useBookPopup } from 'store/hooks'
import Alert from 'components/Alert'
import FoundBooks from 'components/FoundBooks'

const FoundBooksContainer = () => {
  useFetchBooks()

  const { isLoading, books } = useFoundBooks()
  const { onShow } = useBookPopup()

  if (isLoading) {
    return <Alert title='Ищу...' />
  }

  if (!isLoading && books.length === 0) {
    return <Alert title='Ничего не нашлось' />
  }

  const onOpenHandler = (bookId) => {
    onShow(bookId)
  }

  return <FoundBooks books={books} onOpen={onOpenHandler} />
}

export default FoundBooksContainer
