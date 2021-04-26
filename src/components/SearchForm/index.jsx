import React, { useRef, useState } from 'react'
import { useSetSuggests, useSuggests } from '../../store/hooks'
import SearchInput from './SearchInput'
import SearchButton from './SearchButton'
import SuggestsPopup from '../SuggestsPopup'
import { useSuggestsPopupProps } from './hooks'
import './index.css'

const SearchForm = () => {
  const formRef = useRef()
  const inputBoxRef = useRef()

  const [showSuggests, setShowSuggests] = useState(false)
  const suggestsPopupProps = useSuggestsPopupProps(formRef, inputBoxRef)

  const setSuggests = useSetSuggests()
  const suggests = useSuggests()

  const onSearchHeandler = (e) => {
    e.preventDefault()

    setTimeout(() => {
      setSuggests([
        'Война и мир',
        '1984',
        'Золотая рыбка',
        'Двухсотлетний человек',
      ])
      setShowSuggests(true)
    }, 250)
  }

  return (
    <>
      <form ref={formRef} className='search-form'>
        <SearchInput ref={inputBoxRef} />
        <SearchButton onSearch={onSearchHeandler} />
      </form>
      {showSuggests && (
        <SuggestsPopup
          suggests={suggests}
          {...suggestsPopupProps}
          onClose={() => setShowSuggests(false)}
        />
      )}
    </>
  )
}

export default SearchForm
