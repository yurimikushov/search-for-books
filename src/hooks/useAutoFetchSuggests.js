import { useEffect } from 'react'
import { useSearchQuery, useFetchSuggests } from '../store/hooks'

const useAutoFetchSuggests = () => {
  // TODO: should abort fetching suggests after started search
  const [searchQuery] = useSearchQuery()
  const fetchSuggests = useFetchSuggests()

  useEffect(() => {
    fetchSuggests(searchQuery)
  }, [searchQuery])
}

export { useAutoFetchSuggests }
