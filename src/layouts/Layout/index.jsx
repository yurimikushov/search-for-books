import React from 'react'
import PropTypes from 'prop-types'
import { useSaveURLSearchParamsToStore } from 'hooks'
import './index.css'

const Layout = ({ children }) => {
  useSaveURLSearchParamsToStore()

  return <div className='layout'>{children}</div>
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
}

export { Layout }
