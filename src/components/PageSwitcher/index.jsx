import React from 'react'
import PropTypes from 'prop-types'
import PageSwitcherBegin from './PageSwitcherBegin'
import PageSwitcherPage from './PageSwitcherPage'
import PageSwitcherNext from './PageSwitcherNext'
import './index.css'

const pageSwitcherItems = {
  begin: PageSwitcherBegin,
  page: PageSwitcherPage,
  next: PageSwitcherNext,
}

const PageSwitcher = ({ pages }) => (
  <ul className='page-switcher'>
    {pages.map(({ type, title, isCurrentPage, onSwitch }) => {
      const PageSwitcherItem = pageSwitcherItems[type]
      return (
        <PageSwitcherItem
          key={title}
          title={title}
          isCurrentPage={isCurrentPage}
          onClick={onSwitch}
        />
      )
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
