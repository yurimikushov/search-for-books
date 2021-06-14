import React, { useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import './index.css'

const SuggestsPopup = ({ children, top, left, width, onHide }) => {
  const suggestsPopupRef = useRef()

  useEffect(() => {
    const suggestsPopup = suggestsPopupRef.current

    const onCloseHandler = ({ target }) => {
      if (suggestsPopup && !suggestsPopup.contains(target)) {
        onHide()
      }
    }

    addEventListener('click', onCloseHandler)
    return () => removeEventListener('click', onCloseHandler)
  }, [])

  return createPortal(
    <div
      ref={suggestsPopupRef}
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
}

SuggestsPopup.propTypes = {
  children: PropTypes.element.isRequired,
  top: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  onHide: PropTypes.func.isRequired,
}

export default SuggestsPopup
