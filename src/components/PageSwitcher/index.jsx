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

const PageSwitcher = ({ currentPage, pages, onSwitch }) => (
  <ul className='page-switcher'>
    {pages.map(({ type, title, pageNum }) => {
      const PageSwitcherItem = pageSwitcherItems[type]
      return (
        <PageSwitcherItem
          key={title}
          title={title}
          isCurrentPage={currentPage === pageNum}
          onSwitch={() => onSwitch(pageNum)}
        />
      )
    })}
  </ul>
)

PageSwitcher.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onSwitch: PropTypes.func.isRequired,
}

export default PageSwitcher
