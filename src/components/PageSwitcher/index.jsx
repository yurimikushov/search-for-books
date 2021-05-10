import React from 'react'
import PropTypes from 'prop-types'
import { pageSwitcherItemFactory } from './pageSwitcherItemFactory'
import './index.css'

const PageSwitcher = ({ pages }) => (
  <ul className='page-switcher'>
    {pages.map(({ type, title, isCurrentPage, onSwitch }) => {
      return pageSwitcherItemFactory(type, title, isCurrentPage, onSwitch)
    })}
  </ul>
)

PageSwitcher.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      isCurrentPage: PropTypes.bool.isRequired,
      onSwitch: PropTypes.func.isRequired,
    }).isRequired
  ).isRequired,
}

export default PageSwitcher
