import React from 'react'
import SearchForm from './components/SearchForm'
import FoundBooks from './components/FoundBooks'
import { useFetchSuggests } from './hooks'
import './App.css'

const App = () => {
  useFetchSuggests()

  return (
    <>
      <SearchForm />
      <FoundBooks />
    </>
  )
}

export default App
