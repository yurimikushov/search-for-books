import React from 'react'
import { withLayout } from 'layouts'
import SearchForm from 'containers/SearchForm'
import SuggestsPopup from 'containers/SuggestsPopup'

const HomePage = () => (
  <>
    <SearchForm
      style={{
        transform: 'translateY(calc(100vh / 2 - 200%))',
      }}
    />
    <SuggestsPopup />
  </>
)
export default withLayout(HomePage)
