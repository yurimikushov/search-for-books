import React from 'react'
import PropTypes from 'prop-types'

const SearchButton = ({ onSearch }) => (
  <button className='search-form__search-btn' type='submit' onClick={onSearch}>
    Найти
  </button>
)

SearchButton.propTypes = {
  onSearch: PropTypes.func.isRequired,
}

export default SearchButton
