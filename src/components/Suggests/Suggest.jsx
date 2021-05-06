import React from 'react'
import PropTypes from 'prop-types'

const Suggest = ({ title }) => <li className='suggest'>{title}</li>

Suggest.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Suggest
