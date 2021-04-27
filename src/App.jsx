import React from 'react'
import SearchForm from './components/SearchForm'
import { useFetchSuggests } from './hooks'
import './App.css'

const App = () => {
  useFetchSuggests()

  return (
    <>
      <SearchForm />
    </>
  )
}

export default App
