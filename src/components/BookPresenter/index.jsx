import React, { useRef, useEffect } from 'react'
import { useBookPopup, useFoundBook } from '../../store/hooks'
import BookPopup from './BookPopup'
import Book from './Book'

const BookPresenter = () => {
  const bookPopupRef = useRef()
  const { show, bookId, onHide } = useBookPopup()
  const book = useFoundBook(bookId)

  useEffect(() => {
    if (!show) {
      return
    }

    const onCloseHanler = ({ target }) => {
      const isOutClick = !bookPopupRef.current.contains(target)

      if (isOutClick) {
        onHide()
      }
    }

    window.addEventListener('click', onCloseHanler)
    return () => window.removeEventListener('click', onCloseHanler)
  }, [show])

  if (!show) {
    return null
  }

  return (
    <BookPopup ref={bookPopupRef}>
      <Book {...book} />
    </BookPopup>
  )
}

export default BookPresenter
