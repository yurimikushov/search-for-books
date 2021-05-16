import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { useSearchQuery } from 'store/hooks'
import {
  useUpdateSearchQuery,
  useActivateSearchQueryField,
  useSearchBooks,
  useAutoUpdateSuggestsPopupProps,
} from 'hooks'
import SearchForm from 'components/SearchForm'

const SearchFormContainer = ({ style }) => {
  const [searchQuery] = useSearchQuery()

  const onChangeHandler = useUpdateSearchQuery()
  const onActivateHandler = useActivateSearchQueryField()
  const onClearHandler = useUpdateSearchQuery()
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
      onActivate={onActivateHandler}
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
