import React, { useRef, useState } from 'react'

const SearchInput = React.forwardRef((_, inputBoxRef) => {
  const inputRef = useRef()
  const [value, setValue] = useState('')

  const onChangeValue = (e) => {
    setValue(e.target.value)
  }

  const clearInput = (e) => {
    e.preventDefault()
    setValue('')
    inputRef.current.focus()
  }

  return (
    <span ref={inputBoxRef} className='search-form__input-box'>
      <input
        ref={inputRef}
        className='search-form__input'
        type='text'
        value={value}
        onChange={onChangeValue}
        placeholder='Введите название книги'
        autoFocus
      />
      <button
        className='search-form__clear-btn'
        type='reset'
        onClick={clearInput}
        data-visible={value.length > 0}
      >
        &nbsp;
      </button>
    </span>
  )
})

SearchInput.displayName = 'SearchInput'

export default SearchInput
