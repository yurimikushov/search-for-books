import React from 'react'
import PropTypes from 'prop-types'
import { dummy } from 'utils'

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

PageSwitcherPage.displayName = 'PageSwitcherItem(Page)'

export default PageSwitcherPage
