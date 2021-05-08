import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import Suggest from './Suggest'
import './index.css'

const Suggests = forwardRef(({ suggests, onChoose }, suggestsRef) => (
  <ul ref={suggestsRef} className='suggests'>
    {suggests.map(({ id, title }) => (
      <Suggest key={id} title={title} onChoose={() => onChoose(title)} />
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
  onChoose: PropTypes.func.isRequired,
}

Suggests.displayName = 'Suggests'

export default Suggests
