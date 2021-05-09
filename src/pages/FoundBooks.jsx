import React from 'react'
import { useAutoUpdateSearchQueryFromURL } from '../hooks'
import SearchForm from '../containers/SearchForm'
import FoundBooks from '../containers/FoundBooks'
import SuggestsPopup from '../containers/SuggestsPopup'
import BookPopup from '../containers/BookPopup'

const FoundBooksPage = () => {
  useAutoUpdateSearchQueryFromURL()

  return (
    <>
      <SearchForm />
      <FoundBooks />
      <SuggestsPopup />
      <BookPopup />
    </>
  )
}

export default FoundBooksPage
