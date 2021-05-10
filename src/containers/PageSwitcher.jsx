import React from 'react'
import PageSwitcher from '../components/PageSwitcher'

const PageSwitcherContainer = () => {
  const pages = [
    {
      type: 'begin',
      title: 'В начало',
      isCurrentPage: false,
      onSwitch: () => {},
    },
    {
      type: 'page',
      title: '1',
      isCurrentPage: false,
      onSwitch: () => {},
    },
    {
      type: 'page',
      title: '2',
      isCurrentPage: true,
      onSwitch: () => {},
    },
    {
      type: 'page',
      title: '3',
      isCurrentPage: false,
      onSwitch: () => {},
    },
    {
      type: 'page',
      title: '4',
      isCurrentPage: false,
      onSwitch: () => {},
    },
    {
      type: 'page',
      title: '5',
      isCurrentPage: false,
      onSwitch: () => {},
    },
    {
      type: 'next',
      title: 'дальше',
      isCurrentPage: false,
      onSwitch: () => {},
    },
  ]

  return <PageSwitcher pages={pages} />
}

export default PageSwitcherContainer
