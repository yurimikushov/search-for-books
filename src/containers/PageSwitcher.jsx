import React from 'react'
import PageSwitcher from '../components/PageSwitcher'

const PageSwitcherContainer = () => {
  const pages = [
    {
      type: 'begin',
      title: 'В начало',
      isCurrentPage: false,
    },
    {
      type: 'page',
      title: '1',
      isCurrentPage: false,
    },
    {
      type: 'page',
      title: '2',
      isCurrentPage: true,
    },
    {
      type: 'page',
      title: '3',
      isCurrentPage: false,
    },
    {
      type: 'page',
      title: '4',
      isCurrentPage: false,
    },
    {
      type: 'page',
      title: '5',
      isCurrentPage: false,
    },
    {
      type: 'next',
      title: 'дальше',
      isCurrentPage: false,
    },
  ]

  const onSwitchHandler = (page) => {
    onSearch(searchQuery, page)
  }

  return <PageSwitcher pages={pages} onSwitch={onSwitchHandler} />
}

export default PageSwitcherContainer
