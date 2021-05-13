import React from 'react'
import PropTypes from 'prop-types'

const PageSwitcherBegin = ({ title, onSwitch }) => {
  return (
    <li className='page-switcher__begin page-switcher__item' onClick={onSwitch}>
      {title}
    </li>
  )
}

PageSwitcherBegin.propTypes = {
  title: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired,
}

PageSwitcherBegin.displayName = 'PageSwitcherItem(Begin)'

export default PageSwitcherBegin
