import React, { useRef, useState } from 'react'
import SearchInput from './SearchInput'
import DynamicSuggests from '../DynamicSuggests'
import { useDynamicSuggestsParams } from './hooks'
import './index.css'

const SearchForm = () => {
  const formRef = useRef()
  const inputBoxRef = useRef()

  const [showSuggests, setShowSuggests] = useState(false)
  const dynamicSuggestsProps = useDynamicSuggestsParams(formRef, inputBoxRef)

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
        <DynamicSuggests
          suggests={suggests}
          {...dynamicSuggestsProps}
          onClose={() => setShowSuggests(false)}
        />
      )}
    </>
  )
}

export default SearchForm
