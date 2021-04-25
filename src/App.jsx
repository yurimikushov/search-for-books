import React from 'react'
import SearchForm from './components/SearchForm'
import './App.css'

const App = () => (
  <>
    <SearchForm />
    <div
      className='dynamic-suggest-popup'
      style={{ position: 'absolute' }}
    ></div>
  </>
)

export default App
