import React from 'react'
import PropTypes from 'prop-types'

const SearchButton = ({ onSearch }) => {
  const onSearchHeandler = (e) => {
    e.preventDefault()
    onSearch()
  }

  return (
    <button
      className='search-form__search-btn'
      type='submit'
      onClick={onSearchHeandler}
    >
      Найти
    </button>
  )
}

SearchButton.propTypes = {
  onSearch: PropTypes.func.isRequired,
}

export default SearchButton
