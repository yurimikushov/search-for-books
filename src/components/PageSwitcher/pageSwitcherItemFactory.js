import React from 'react'
import PageSwitcherBegin from './PageSwitcherBegin'
import PageSwitcherPage from './PageSwitcherPage'
import PageSwitcherNext from './PageSwitcherNext'

const pageSwitcherItemFactory = (type, title, isCurrentPage, onSwitch) => {
  switch (type) {
    case 'begin':
      return <PageSwitcherBegin key={title} title={title} onClick={onSwitch} />
    case 'page':
      return (
        <PageSwitcherPage
          key={title}
          title={title}
          isCurrentPage={isCurrentPage}
          onClick={onSwitch}
        />
      )
    case 'next':
      return <PageSwitcherNext key={title} title={title} onClick={onSwitch} />
    default:
      return null
  }
}

export { pageSwitcherItemFactory }
