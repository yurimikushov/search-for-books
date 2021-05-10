import React from 'react'
import PropTypes from 'prop-types'

const PageSwitcherBegin = ({ title, onClick }) => {
  return (
    <li className='page-switcher__begin page-switcher__item' onClick={onClick}>
      {title}
    </li>
  )
}

PageSwitcherBegin.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

PageSwitcherBegin.displayName = 'PageSwitcherItem(Begin)'

export default PageSwitcherBegin
