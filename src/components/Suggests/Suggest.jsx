import React from 'react'
import PropTypes from 'prop-types'

const Suggest = ({ title, onChoose }) => (
  <li className='suggest' onClick={onChoose}>
    {title}
  </li>
)

Suggest.propTypes = {
  title: PropTypes.string.isRequired,
  onChoose: PropTypes.func.isRequired,
}

export default Suggest
