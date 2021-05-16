import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { debounce } from 'utils'
import { fetchSuggests as fetchSuggestsAction } from 'store/actions'

const useFetchSuggests = () => {
  const dispatch = useDispatch()

  const fetchSuggests = (searchQuery) => {
    dispatch(fetchSuggestsAction(searchQuery))
  }

  return useCallback(debounce(fetchSuggests, 150), [])
}

export { useFetchSuggests }
