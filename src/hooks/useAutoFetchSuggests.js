import { useCallback, useEffect } from 'react'
import { useSearchQuery, useFetchSuggests } from '../store/hooks'
import { debounce } from '../utils'

const useAutoFetchSuggests = () => {
  const [searchQuery] = useSearchQuery()
  const fetchSuggests = useCallback(debounce(useFetchSuggests(), 100), [])

  useEffect(() => {
    fetchSuggests(searchQuery)
  }, [searchQuery])
}

export { useAutoFetchSuggests }
