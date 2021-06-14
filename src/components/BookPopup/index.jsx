import React, { useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import './index.css'

const BookPopup = ({ children, onHide }) => {
  const bookPopupRef = useRef()

  useEffect(() => {
    const onCloseHandler = ({ target }) => {
      if (!bookPopupRef.current.contains(target)) {
        onHide()
      }
    }

    addEventListener('click', onCloseHandler)
    return () => removeEventListener('click', onCloseHandler)
  }, [])

  useEffect(() => {
    const onCloseHandler = ({ key }) => {
      if (key === 'Escape') {
        onHide()
      }
    }

    addEventListener('keydown', onCloseHandler)
    return () => removeEventListener('keydown', onCloseHandler)
  }, [])

  return createPortal(
    <div className='book-popup'>
      <div className='book-popup__overlay'>
        <div ref={bookPopupRef} className='book-popup__content'>
          {children}
        </div>
      </div>
    </div>,
    document.querySelector('.book-popup-portal')
  )
}

BookPopup.propTypes = {
  children: PropTypes.element.isRequired,
  onHide: PropTypes.func.isRequired,
}

export default BookPopup
