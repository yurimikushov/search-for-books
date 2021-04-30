import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { createPortal } from 'react-dom'
import './index.css'

const BookPopup = forwardRef(({ children }, bookPopupRef) =>
  createPortal(
    <div className='book-popup__overlay'>
      <div ref={bookPopupRef} className='book-popup__content'>
        {children}
      </div>
    </div>,
    document.querySelector('.book-popup')
  )
)

BookPopup.propTypes = {
  children: PropTypes.element.isRequired,
}

BookPopup.displayName = 'BookPopup'

export default BookPopup
