import React, { useRef } from 'react'
import { useSearchBooks } from '../../hooks'
import { useAutoUpdateSuggestsPopupProps } from './hooks'
import SearchInput from './SearchInput'
import SearchButton from './SearchButton'
import './index.css'

const SearchForm = () => {
  const formRef = useRef()
  const inputBoxRef = useRef()

  useAutoUpdateSuggestsPopupProps(formRef, inputBoxRef)

  const searchBooks = useSearchBooks()

  const onSearchHeandler = (e) => {
    e.preventDefault()
    searchBooks()
  }

  return (
    <form ref={formRef} className='search-form'>
      <SearchInput ref={inputBoxRef} />
      <SearchButton onSearch={onSearchHeandler} />
    </form>
  )
}

export default SearchForm
