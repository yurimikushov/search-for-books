import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { createPortal } from 'react-dom'
import './index.css'

const SuggestsPopup = ({ suggests, top, left, width, onClose }) => {
  const suggestsRef = useRef()

  useEffect(() => {
    const closeHandler = ({ target }) => {
      const isOutClick = !suggestsRef.current.contains(target)

      if (isOutClick) {
        onClose()
      }
    }

    window.addEventListener('click', closeHandler)
    return () => window.removeEventListener('click', closeHandler)
  }, [])

  return createPortal(
    <ul
      ref={suggestsRef}
      className='suggests-popup'
      style={{ position: 'absolute', top, left, width }}
    >
      {suggests.map((suggest, id) => (
        <li key={id} className='suggests-popup__item'>
          {suggest}
        </li>
      ))}
    </ul>,
    document.querySelector('.suggests-popup-container')
  )
}

SuggestsPopup.propTypes = {
  suggests: PropTypes.array.isRequired,
  top: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default SuggestsPopup
