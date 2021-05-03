import React from 'react'
import { useAutoFetchSuggests } from '../hooks'
import SearchForm from '../components/SearchForm'
import SuggestsPresenter from '../components/SuggestsPresenter'

const HomePage = () => {
  useAutoFetchSuggests()

  return (
    <>
      <div
        className='search-form-wrapper'
        style={{ transform: 'translateY(calc(100vh / 2 - 200%))' }}
      >
        <SearchForm />
      </div>
      <SuggestsPresenter />
    </>
  )
}

export default HomePage
