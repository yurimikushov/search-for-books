import { useCallback, useEffect } from 'react'
import { useSearchQuery, useFetchSuggests } from '../store/hooks'
import { debounce } from '../utils'

const useAutoFetchSuggests = () => {
  // TODO: should abort fetching suggests after started search
  const [searchQuery] = useSearchQuery()
  const fetchSuggests = useFetchSuggests()

  useEffect(() => {
    fetchSuggests(searchQuery)
  }, [searchQuery])
}

export { useAutoFetchSuggests }
