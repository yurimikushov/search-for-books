import React from 'react'
import { withLayout } from 'layouts'
import SearchForm from 'containers/SearchForm'
import FoundBooks from 'containers/FoundBooks'
import PageSwitcher from 'containers/PageSwitcher'
import SuggestsPopup from 'containers/SuggestsPopup'
import BookPopup from 'containers/BookPopup'

const FoundBooksPage = () => (
  <>
    <SearchForm />
    <FoundBooks />
    <PageSwitcher />
    <SuggestsPopup />
    <BookPopup />
  </>
)

export default withLayout(FoundBooksPage)
