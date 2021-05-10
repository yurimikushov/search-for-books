import React from 'react'
import PropTypes from 'prop-types'

const PageSwitcherNext = ({ title, onClick }) => {
  return (
    <li className='page-switcher__next page-switcher__item' onClick={onClick}>
      {title}
    </li>
  )
}

PageSwitcherNext.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

PageSwitcherNext.displayName = 'PageSwitcherItem(Next)'

export default PageSwitcherNext
