import React, { useRef, useState } from 'react'
import SearchInput from './SearchInput'
import SuggestsPopup from '../SuggestsPopup'
import { useSuggestsPopupProps } from './hooks'
import './index.css'

const SearchForm = () => {
  const formRef = useRef()
  const inputBoxRef = useRef()

  const [showSuggests, setShowSuggests] = useState(false)
  const suggestsPopupProps = useSuggestsPopupProps(formRef, inputBoxRef)

  const [suggests, setSuggests] = useState([])

  const searchHeandler = (e) => {
    e.preventDefault()

    setTimeout(() => {
      setShowSuggests(true)
      setSuggests([
        'Война и мир',
        '1984',
        'Золотая рыбка',
        'Двухсотлетний человек',
      ])
    }, 250)
  }

  return (
    <>
      <form ref={formRef} className='search-form'>
        <SearchInput ref={inputBoxRef} />
        <button
          className='search-form__search-btn'
          type='submit'
          onClick={searchHeandler}
        >
          Найти
        </button>
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
