import React, { forwardRef, useRef } from 'react'
import PropTypes from 'prop-types'

const SearchInput = forwardRef((props, inputBoxRef) => {
  const { value, onChange, onActivate, onClear } = props

  const inputRef = useRef()

  const onChangeHandler = (e) => {
    onChange(e.target.value)
  }

  const onActivateHandler = () => {
    onActivate()
  }

  const onClearHandler = (e) => {
    e.preventDefault()
    onClear()
    inputRef.current.focus()
  }

  return (
    <span ref={inputBoxRef} className='search-form__input-box'>
      <input
        ref={inputRef}
        className='search-form__input'
        type='text'
        value={value}
        onChange={onChangeHandler}
        onClick={onActivateHandler}
        placeholder='Введите название книги'
        autoFocus
      />
      <button
        className={
          'search-form__clear-btn ' +
          (value.length > 0
            ? 'search-form__clear-btn_visible'
            : 'search-form__clear-btn_hidden')
        }
        type='reset'
        onClick={onClearHandler}
      >
        &nbsp;
      </button>
    </span>
  )
})

SearchInput.displayName = 'SearchInput'

SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onActivate: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
}

export default SearchInput
