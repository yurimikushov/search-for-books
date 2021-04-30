import React, { useRef, useEffect } from 'react'
import { useBookPopup } from '../store/hooks'
import BookPopup from './BookPopup'
import Book from './Book'

const BookPopupPresenter = () => {
  const bookPopupRef = useRef()
  const { show, book, onHide } = useBookPopup()

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

export default BookPopupPresenter
