import React, { forwardRef, useRef } from 'react'
import { useSearchQuery } from '../../store/hooks'

const SearchInput = forwardRef((_, inputBoxRef) => {
  const inputRef = useRef()
  const [searchQuery, setSearchQuery] = useSearchQuery()

  const onChangeSearchQuery = (e) => {
    setSearchQuery(e.target.value)
  }

  const onClearSearchQuery = (e) => {
    e.preventDefault()
    setSearchQuery('')
    inputRef.current.focus()
  }

  return (
    <span ref={inputBoxRef} className='search-form__input-box'>
      <input
        ref={inputRef}
        className='search-form__input'
        type='text'
        value={searchQuery}
        onChange={onChangeSearchQuery}
        placeholder='Введите название книги'
        autoFocus
      />
      <button
        className={
          'search-form__clear-btn ' +
          (searchQuery.length > 0
            ? 'search-form__clear-btn_visible'
            : 'search-form__clear-btn_hidden')
        }
        type='reset'
        onClick={onClearSearchQuery}
      >
        &nbsp;
      </button>
    </span>
  )
})

SearchInput.displayName = 'SearchInput'

export default SearchInput
