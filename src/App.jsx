import React from 'react'
import { useAutoFetchSuggests } from './hooks'
import SearchForm from './components/SearchForm'
import FoundBooks from './components/FoundBooks'
import SuggestsPopupPresenter from './components/SuggestsPopupPresenter'
import BookPopupPresenter from './components/BookPopupPresenter'
import './App.css'

const App = () => {
  useAutoFetchSuggests()

  return (
    <>
      <SearchForm />
      <FoundBooks />
      <SuggestsPopupPresenter />
      <BookPopupPresenter />
    </>
  )
}

export default App
