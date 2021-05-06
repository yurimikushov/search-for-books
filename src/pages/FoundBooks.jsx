import React from 'react'
import { useAutoFetchSuggests } from '../hooks'
import SearchForm from '../containers/SearchForm'
import FoundBooks from '../containers/FoundBooks'
import SuggestsPresenter from '../components/SuggestsPresenter'
import BookPopup from '../containers/BookPopup'

const FoundBooksPage = () => {
  useAutoFetchSuggests()

  return (
    <>
      <SearchForm />
      <FoundBooks />
      <SuggestsPresenter />
      <BookPopup />
    </>
  )
}

export default FoundBooksPage
