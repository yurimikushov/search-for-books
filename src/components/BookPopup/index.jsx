import React, { useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useBookPopup } from '../../store/hooks'
import Book from '../Book'
import './index.css'

const BookPopup = () => {
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

  return createPortal(
    <div className='book-popup__overlay'>
      <div ref={bookPopupRef} className='book-popup__content'>
        <Book {...book} />
      </div>
    </div>,
    document.querySelector('.book-popup')
  )
}

export default BookPopup
