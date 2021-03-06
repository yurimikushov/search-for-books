import React from 'react'
import PropTypes from 'prop-types'
import SearchInput from './SearchInput'
import SearchButton from './SearchButton'
import './index.css'

const SearchForm = ({
  formRef,
  inputBoxRef,
  value,
  onChange,
  onActivate,
  onClear,
  onSearch,
  style = {},
}) => (
  <form ref={formRef} className='search-form' style={style}>
    <SearchInput
      ref={inputBoxRef}
      value={value}
      onChange={onChange}
      onActivate={onActivate}
      onClear={onClear}
    />
    <SearchButton onSearch={() => onSearch(value)} />
  </form>
)

SearchForm.propTypes = {
  formRef: PropTypes.object.isRequired,
  inputBoxRef: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onActivate: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  style: PropTypes.object,
}

export default SearchForm
