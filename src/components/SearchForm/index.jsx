import React, { useRef, useState } from 'react'
import DynamicSuggests from '../DynamicSuggests'
import { useDynamicSuggestsParams } from './hooks'
import './index.css'

const SearchForm = () => {
  const formRef = useRef()
  const inputRef = useRef()

  const dynamicSuggestsProps = useDynamicSuggestsParams(formRef, inputRef)

  const [suggests, setSuggests] = useState([])

  const searchHeandler = (e) => {
    e.preventDefault()

    setTimeout(() => {
      setSuggests([
        ...suggests,
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
        <input
          ref={inputRef}
          className='search-form__input'
          type='text'
          placeholder='Введите название книги'
          autoFocus
        />
        <button
          className='search-form__search-btn'
          type='submit'
          onClick={searchHeandler}
        >
          Найти
        </button>
      </form>
      <DynamicSuggests suggests={suggests} {...dynamicSuggestsProps} />
    </>
  )
}

export default SearchForm
