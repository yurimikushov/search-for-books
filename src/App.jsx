import React from 'react'
import { useFetchSuggests } from './hooks'
import SearchForm from './components/SearchForm'
import FoundBooks from './components/FoundBooks'
import BookPopup from './components/BookPopup'
import './App.css'

const App = () => {
  useFetchSuggests()

  return (
    <>
      <SearchForm />
      <FoundBooks />
      <BookPopup />
    </>
  )
}

export default App
