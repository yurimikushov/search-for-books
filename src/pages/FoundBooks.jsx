import React from 'react'
import { useAutoTakeSearchParamsFromURL } from 'hooks'
import SearchForm from 'containers/SearchForm'
import FoundBooks from 'containers/FoundBooks'
import PageSwitcher from 'containers/PageSwitcher'
import SuggestsPopup from 'containers/SuggestsPopup'
import BookPopup from 'containers/BookPopup'

const FoundBooksPage = () => {
  useAutoTakeSearchParamsFromURL()

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
