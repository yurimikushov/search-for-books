import React from 'react'
import { useLocation } from 'react-router-dom'
import { useAutoFetchSuggests, useQueryParams } from '../hooks'
import SearchForm from '../components/SearchForm'
import FoundBooks from '../components/FoundBooks'
import SuggestsPresenter from '../components/SuggestsPresenter'
import BookPresenter from '../components/BookPresenter'

const FoundBooksPage = () => {
  useAutoFetchSuggests()

  const params = useQueryParams()

  return (
    <>
      <SearchForm />
      <FoundBooks />
      <SuggestsPresenter />
      <BookPresenter />
      <div>{JSON.stringify(params)}</div>
    </>
  )
}

export default FoundBooksPage
