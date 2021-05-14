import React from 'react'
import PropTypes from 'prop-types'

const dummy = () => {}

const PageSwitcherPage = ({ isCurrentPage, title, onSwitch }) => (
  <li
    className={
      'page-switcher__page page-switcher__item' +
      (isCurrentPage ? ' page-switcher__item_activated' : '')
    }
    onClick={!isCurrentPage ? onSwitch : dummy}
  >
    {title}
  </li>
)

PageSwitcherPage.propTypes = {
  isCurrentPage: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired,
}

PageSwitcherPage.displayName = 'PageSwitcherItem(PageNum)'

export default PageSwitcherPage
