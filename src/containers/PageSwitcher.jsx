import React from 'react'
import { useSearchBooks } from '../hooks'
import { useSearchQuery, useFoundBooks } from '../store/hooks'
import { createPageList } from '../utils'
import PageSwitcher from '../components/PageSwitcher'

const PageSwitcherContainer = () => {
  const onSearch = useSearchBooks()
  const [searchQuery] = useSearchQuery()
  const { isLoading, currentPage, numPages } = useFoundBooks()

  if (isLoading) {
    return null
  }

  const pages = createPageList(currentPage, numPages)

  if (pages.length === 0) {
    return null
  }

  const onSwitchHandler = (page) => {
    onSearch(searchQuery, page)
  }

  return <PageSwitcher pages={pages} onSwitch={onSwitchHandler} />
}

export default PageSwitcherContainer
