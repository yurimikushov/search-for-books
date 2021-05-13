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

const PageSwitcher = ({ pages, onSwitch }) => (
  <ul className='page-switcher'>
    {pages.map(({ type, title, pageNum, isCurrentPage }) => {
      const PageSwitcherItem = pageSwitcherItems[type]
      return (
        <PageSwitcherItem
          key={title}
          title={title}
          isCurrentPage={isCurrentPage}
          onSwitch={() => onSwitch(pageNum)}
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
      isCurrentPage: PropTypes.bool,
    }).isRequired
  ).isRequired,
  onSwitch: PropTypes.func.isRequired,
}

export default PageSwitcher
