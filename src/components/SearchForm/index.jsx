import React, { useRef } from 'react'
import { useSearchQuery, useFetchBooks } from '../../store/hooks'
import { useAutoUpdateSuggestsPopupProps } from './hooks'
import SearchInput from './SearchInput'
import SearchButton from './SearchButton'
import './index.css'

const SearchForm = () => {
  const formRef = useRef()
  const inputBoxRef = useRef()

  useAutoUpdateSuggestsPopupProps(formRef, inputBoxRef)

  const [searchQuery] = useSearchQuery()
  const fetchBooks = useFetchBooks()

  const onSearchHeandler = (e) => {
    e.preventDefault()
    fetchBooks(searchQuery)
  }

  return (
    <form ref={formRef} className='search-form'>
      <SearchInput ref={inputBoxRef} />
      <SearchButton onSearch={onSearchHeandler} />
    </form>
  )
}

export default SearchForm
