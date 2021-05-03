import React from 'react'
import { useLocation } from 'react-router-dom'
import { useAutoFetchSuggests } from '../hooks'
import SearchForm from '../components/SearchForm'
import FoundBooks from '../components/FoundBooks'
import SuggestsPresenter from '../components/SuggestsPresenter'
import BookPresenter from '../components/BookPresenter'

function useQueryParams() {
  const query = new URLSearchParams(useLocation().search)

  const params = {}

  for (const [name, value] of query.entries()) {
    params[name] = value
  }

  return params
}

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
