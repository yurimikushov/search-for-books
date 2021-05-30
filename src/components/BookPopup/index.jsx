import React, { forwardRef } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import './index.css'

const BookPopup = forwardRef(({ children }, bookPopupRef) =>
  createPortal(
    <div className='book-popup'>
      <div className='book-popup__overlay'>
        <div ref={bookPopupRef} className='book-popup__content'>
          {children}
        </div>
      </div>
    </div>,
    document.querySelector('.book-popup-portal')
  )
)

BookPopup.propTypes = {
  children: PropTypes.element.isRequired,
}

BookPopup.displayName = 'BookPopup'

export default BookPopup
