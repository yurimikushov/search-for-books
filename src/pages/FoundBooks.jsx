import React from 'react'
import { useFetchBooks } from 'hooks'
import { withLayout } from 'layouts'
import SearchForm from 'containers/SearchForm'
import FoundBooks from 'containers/FoundBooks'
import PageSwitcher from 'containers/PageSwitcher'
import SuggestsPopup from 'containers/SuggestsPopup'
import BookPopup from 'containers/BookPopup'

const FoundBooksPage = () => {
  useFetchBooks()

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

export default withLayout(FoundBooksPage)
