import React, { forwardRef } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import './index.css'

const SuggestsPopup = forwardRef(
  ({ children, top, left, width }, suggestsRef) =>
    createPortal(
      <div
        ref={suggestsRef}
        className='suggests-popup'
        style={{
          top,
          left,
          width,
        }}
      >
        {children}
      </div>,
      document.querySelector('.suggests-popup-portal')
    )
)

SuggestsPopup.propTypes = {
  children: PropTypes.element.isRequired,
  top: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
}

SuggestsPopup.displayName = 'SuggestsPopup'

export default SuggestsPopup
