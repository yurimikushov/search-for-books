import React from 'react'
import { useAutoFetchSuggests } from './hooks'
import SearchForm from './components/SearchForm'
import FoundBooks from './components/FoundBooks'
import SuggestsPresenter from './components/SuggestsPresenter'
import BookPresenter from './components/BookPresenter'
import './App.css'

const App = () => {
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

export default App
