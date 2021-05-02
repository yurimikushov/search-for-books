import React from 'react'
import { useAutoFetchSuggests, useAutoFetchBooks } from './hooks'
import SearchForm from './components/SearchForm'
import FoundBooks from './components/FoundBooks'
import SuggestsPresenter from './components/SuggestsPresenter'
import BookPresenter from './components/BookPresenter'
import './App.css'

const App = () => {
  useAutoFetchSuggests()
  useAutoFetchBooks()

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
