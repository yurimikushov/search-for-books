import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import Suggest from './Suggest'
import './index.css'

const Suggests = forwardRef(({ suggests }, suggestsRef) => (
  <ul ref={suggestsRef} className='suggests'>
    {suggests.map(({ id, title }) => (
      <Suggest key={id} title={title} />
    ))}
  </ul>
))

Suggests.propTypes = {
  suggests: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
}

Suggests.displayName = 'Suggests'

export default Suggests
