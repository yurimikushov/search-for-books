import React from 'react'
import { useURLChangeObserver } from 'hooks'
import { useBookPopup, useFoundBook } from 'store/hooks'
import BookPopup from 'components/BookPopup'
import Book from 'components/Book'

const BookPopupContainer = () => {
  const { show, bookId, onHide } = useBookPopup()
  const book = useFoundBook(bookId)

  useURLChangeObserver(onHide)

  if (!show) {
    return null
  }

  return (
    <BookPopup onHide={onHide}>
      <Book {...book} />
    </BookPopup>
  )
}

export default BookPopupContainer
