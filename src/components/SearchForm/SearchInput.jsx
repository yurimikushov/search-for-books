import React, { useState } from 'react'

const SearchInput = React.forwardRef((_, inputBoxRef) => {
  const [value, setValue] = useState('')

  const onChangeValue = (e) => {
    setValue(e.target.value)
  }

  const clearInput = (e) => {
    e.preventDefault()
    setValue('')
  }

  return (
    <span ref={inputBoxRef} className='search-form__input-box'>
      <input
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
        <svg xmlns='http://www.w3.org/2000/svg' width='14' height='14'>
          <polygon points='14,0.7 13.3,0 7,6.3 0.7,0 0,0.7 6.3,7 0,13.3 0.7,14 7,7.7 13.3,14 14,13.3 7.7,7' />
        </svg>
      </button>
    </span>
  )
})

SearchInput.displayName = 'SearchInput'

export default SearchInput
