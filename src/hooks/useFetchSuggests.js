import { useCallback, useEffect } from 'react'
import {
  useSearchQuery,
  useFetchSuggests as useFetchSuggestsToStore,
} from '../store/hooks'
import { debounce } from '../utils'

const useFetchSuggests = () => {
  const [searchQuery] = useSearchQuery()
  const fetchSuggests = useCallback(
    debounce(useFetchSuggestsToStore(), 1000),
    []
  )

  useEffect(() => {
    if (searchQuery.length > 0) {
      fetchSuggests(searchQuery)
    }
  }, [searchQuery])
}

export { useFetchSuggests }
