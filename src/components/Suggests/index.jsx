import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import './index.css'

const Suggests = ({ suggests }) => (
  <ul className='suggests'>
    {suggests.map(({ id, title }) => (
      <li key={id} className='suggest'>
        {title}
      </li>
    ))}
  </ul>
)

Suggests.propTypes = {
  suggests: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
}

export default Suggests
