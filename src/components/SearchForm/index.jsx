import React, { useRef } from 'react'
import { useFetchSuggests } from '../../store/hooks'
import SearchInput from './SearchInput'
import SearchButton from './SearchButton'
import SuggestsPopup from '../SuggestsPopup'
import { useSuggestsPopupProps } from './hooks'
import './index.css'

const SearchForm = () => {
  const formRef = useRef()
  const inputBoxRef = useRef()
  const suggestsPopupProps = useSuggestsPopupProps(formRef, inputBoxRef)

  const fetchSuggests = useFetchSuggests()

  const onSearchHeandler = (e) => {
    e.preventDefault()
    fetchSuggests('war and peace')
  }

  return (
    <>
      <form ref={formRef} className='search-form'>
        <SearchInput ref={inputBoxRef} />
        <SearchButton onSearch={onSearchHeandler} />
      </form>
      <SuggestsPopup {...suggestsPopupProps} />
    </>
  )
}

export default SearchForm
