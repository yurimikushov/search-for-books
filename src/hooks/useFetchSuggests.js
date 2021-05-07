import { useCallback } from 'react'
import { useFetchSuggests as useFetchSuggestsToStore } from '../store/hooks'
import { debounce } from '../utils'

const useFetchSuggests = () => {
  const fetchSuggests = useCallback(
    debounce(useFetchSuggestsToStore(), 100),
    []
  )

  return (searchQuery) => {
    fetchSuggests(searchQuery)
  }
}

export { useFetchSuggests }
