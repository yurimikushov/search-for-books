import React from 'react'
import PropTypes from 'prop-types'

const SearchButton = ({ onSearch }) => {
  const onSearchHandler = (e) => {
    e.preventDefault()
    onSearch()
  }

  return (
    <button
      className='search-form__search-btn'
      type='submit'
      onClick={onSearchHandler}
    >
      Найти
    </button>
  )
}

SearchButton.propTypes = {
  onSearch: PropTypes.func.isRequired,
}

export default SearchButton
