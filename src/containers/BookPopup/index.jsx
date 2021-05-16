import React, { useRef } from 'react'
import { useBookPopup, useFoundBook } from '../../store/hooks'
import { useHideBookPopup } from './hooks'
import BookPopup from '../../components/BookPopup'
import Book from '../../components/Book'

const BookPopupContainer = () => {
  const bookPopupRef = useRef()
  const { show, bookId } = useBookPopup()
  const book = useFoundBook(bookId)

  useHideBookPopup(bookPopupRef)

  if (!show) {
    return null
  }

  return (
    <BookPopup ref={bookPopupRef}>
      <Book {...book} />
    </BookPopup>
  )
}

export default BookPopupContainer
