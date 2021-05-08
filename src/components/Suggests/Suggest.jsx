import React from 'react'
import PropTypes from 'prop-types'

const Suggest = ({ title, author, onChoose }) => (
  <li className='suggest' onClick={onChoose}>
    <span className='suggest__title'>{title}</span>
    <span className='suggest__author'>{author}</span>
  </li>
)

Suggest.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  onChoose: PropTypes.func.isRequired,
}

export default Suggest
