import React from 'react'
import './index.css'

const SearchForm = () => {
  const searchHeandler = (e) => {
    e.preventDefault()
  }

  return (
    <form className='search-form'>
      <input
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
  )
}

export default SearchForm
