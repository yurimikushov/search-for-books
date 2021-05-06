import React from 'react'
import { useAutoFetchSuggests } from '../hooks'
import SearchForm from '../containers/SearchForm'
import SuggestsPresenter from '../components/SuggestsPresenter'

const HomePage = () => {
  useAutoFetchSuggests()

  return (
    <>
      <SearchForm style={{ transform: 'translateY(calc(100vh / 2 - 200%))' }} />
      <SuggestsPresenter />
    </>
  )
}

export default HomePage
