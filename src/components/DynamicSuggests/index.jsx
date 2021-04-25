import React from 'react'
import PropTypes from 'prop-types'
import { createPortal } from 'react-dom'
import './index.css'

const DynamicSuggests = ({ suggests, top, left, width }) => {
  if (suggests.length === 0) {
    return null
  }

  return createPortal(
    <ul
      className='dynamic-suggests'
      style={{ position: 'absolute', top, left, width }}
    >
      {suggests.map((suggest, id) => (
        <li key={id} className='dynamic-suggests__item'>
          {suggest}
        </li>
      ))}
    </ul>,
    document.querySelector('.dynamic-suggests-popup')
  )
}

DynamicSuggests.propTypes = {
  suggests: PropTypes.array.isRequired,
  top: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
}

export default DynamicSuggests
