import React from 'react'
import PropTypes from 'prop-types'

const Suggest = ({ title, author, onChoose }) => (
  <li className='suggest' onClick={onChoose}>
    {`${title} / ${author}`}
  </li>
)

Suggest.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  onChoose: PropTypes.func.isRequired,
}

export default Suggest
