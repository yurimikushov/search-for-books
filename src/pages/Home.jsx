import React from 'react'
import { useAutoFetchSuggests } from '../hooks'
import SearchForm from '../containers/SearchForm'
import SuggestsPopup from '../containers/SuggestsPopup'

const HomePage = () => {
  useAutoFetchSuggests()

  return (
    <>
      <SearchForm
        style={{
          transform: 'translateY(calc(100vh / 2 - 200%))',
        }}
      />
      <SuggestsPopup />
    </>
  )
}

export default HomePage
