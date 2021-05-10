import React from 'react'
import { useAutoUpdateSearchQueryFromURL } from '../hooks'
import SearchForm from '../containers/SearchForm'
import FoundBooks from '../containers/FoundBooks'
import PageSwitcher from '../containers/PageSwitcher'
import SuggestsPopup from '../containers/SuggestsPopup'
import BookPopup from '../containers/BookPopup'

const FoundBooksPage = () => {
  useAutoUpdateSearchQueryFromURL()

  return (
    <>
      <SearchForm />
      <FoundBooks />
      <PageSwitcher />
      <SuggestsPopup />
      <BookPopup />
    </>
  )
}

export default FoundBooksPage
