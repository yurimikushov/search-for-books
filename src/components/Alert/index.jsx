import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const Alert = ({ title }) => (
  <div className='alert'>
    <span className='alert__title'>{title}</span>
  </div>
)

Alert.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Alert
