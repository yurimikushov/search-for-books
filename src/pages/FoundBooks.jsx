import React from 'react'
import { useAutoFetchSuggests } from '../hooks'
import SearchForm from '../containers/SearchForm'
import FoundBooks from '../containers/FoundBooks'
import SuggestsPresenter from '../components/SuggestsPresenter'
import BookPresenter from '../components/BookPresenter'

const FoundBooksPage = () => {
  useAutoFetchSuggests()

  return (
    <>
      <SearchForm />
      <FoundBooks />
      <SuggestsPresenter />
      <BookPresenter />
    </>
  )
}

export default FoundBooksPage
