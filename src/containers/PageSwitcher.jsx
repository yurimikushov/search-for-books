import React from 'react'
import { createPageList } from 'utils'
import { useSearchQuery, useSearchPage, useFoundBooks } from 'store/hooks'
import { useSearchBooks } from 'hooks'
import PageSwitcher from 'components/PageSwitcher'

const PageSwitcherContainer = () => {
  const onSearch = useSearchBooks()
  const [searchQuery] = useSearchQuery()
  const [currentPage] = useSearchPage()
  const { isLoading, numPages } = useFoundBooks()

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

  return (
    <PageSwitcher
      currentPage={currentPage}
      pages={pages}
      onSwitch={onSwitchHandler}
    />
  )
}

export default PageSwitcherContainer
