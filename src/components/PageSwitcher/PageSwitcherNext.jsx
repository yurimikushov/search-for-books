import React from 'react'
import PropTypes from 'prop-types'

const PageSwitcherNext = ({ title, onSwitch }) => (
  <li className='page-switcher__next page-switcher__item' onClick={onSwitch}>
    {title}
  </li>
)

PageSwitcherNext.propTypes = {
  title: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired,
}

PageSwitcherNext.displayName = 'PageSwitcherItem(Next)'

export default PageSwitcherNext
