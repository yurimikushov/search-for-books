import React from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import './index.css'

const SuggestsPopup = ({ children, top, left, width }) =>
  createPortal(
    <div
      className='suggests-popup__content'
      style={{
        top,
        left,
        width,
      }}
    >
      {children}
    </div>,
    document.querySelector('.suggests-popup')
  )

SuggestsPopup.propTypes = {
  children: PropTypes.element.isRequired,
  top: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
}

SuggestsPopup.displayName = 'SuggestsPopup'

export default SuggestsPopup
