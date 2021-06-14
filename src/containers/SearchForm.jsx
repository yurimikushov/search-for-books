import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { useSearchBooks, useAutoUpdateSuggestsPopupProps } from 'hooks'
import { useSearchQuery, useFetchSuggests, useSuggestsPopup } from 'store/hooks'
import SearchForm from 'components/SearchForm'

const SearchFormContainer = ({ style }) => {
  const formRef = useRef()
  const inputBoxRef = useRef()

  useAutoUpdateSuggestsPopupProps(formRef, inputBoxRef)

  const [searchQuery, setSearchQuery] = useSearchQuery()
  const fetchSuggests = useFetchSuggests()
  const searchBooks = useSearchBooks()
  const { onShow: showSuggestsPopup } = useSuggestsPopup()

  const onChangeHandler = (searchQuery) => {
    setSearchQuery(searchQuery)
    fetchSuggests(searchQuery)
  }

  const onActivateHandler = () => {
    showSuggestsPopup()
  }

  const onClearHandler = () => {
    setSearchQuery('')
  }

  const onSearchHandler = (searchQuery) => {
    searchBooks(searchQuery)
  }

  return (
    <SearchForm
      formRef={formRef}
      inputBoxRef={inputBoxRef}
      value={searchQuery}
      onChange={onChangeHandler}
      onActivate={onActivateHandler}
      onClear={onClearHandler}
      onSearch={onSearchHandler}
      style={style}
    />
  )
}

SearchFormContainer.propTypes = {
  style: PropTypes.object,
}

export default SearchFormContainer
