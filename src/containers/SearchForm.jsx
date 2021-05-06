import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { useSearchQuery } from '../store/hooks'
import { useSearchBooks, useAutoUpdateSuggestsPopupProps } from '../hooks'
import SearchForm from '../components/SearchForm'

const SearchFormContainer = ({ style }) => {
  const [searchQuery, setSearchQuery] = useSearchQuery()

  const onChangeHandler = (searchQuery) => {
    setSearchQuery(searchQuery)
  }

  const onClearHandler = () => {
    setSearchQuery('')
  }

  const onSearchHeandler = useSearchBooks()

  const formRef = useRef()
  const inputBoxRef = useRef()

  useAutoUpdateSuggestsPopupProps(formRef, inputBoxRef)

  return (
    <SearchForm
      formRef={formRef}
      inputBoxRef={inputBoxRef}
      value={searchQuery}
      onChange={onChangeHandler}
      onClear={onClearHandler}
      onSearch={onSearchHeandler}
      style={style}
    />
  )
}

SearchFormContainer.propTypes = {
  style: PropTypes.object,
}

export default SearchFormContainer
