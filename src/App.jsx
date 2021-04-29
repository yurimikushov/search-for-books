import React from 'react'
import { useAutoFetchSuggests } from './hooks'
import SearchForm from './components/SearchForm'
import FoundBooks from './components/FoundBooks'
import BookPopup from './components/BookPopup'
import './App.css'

const App = () => {
  useAutoFetchSuggests()

  return (
    <>
      <SearchForm />
      <FoundBooks />
      <BookPopup />
    </>
  )
}

export default App
