import { useCallback, useEffect } from 'react'
import { useSearchQuery, useFetchBooks } from '../store/hooks'
import { debounce } from '../utils'

const useAutoFetchBooks = () => {
  const [searchQuery] = useSearchQuery()
  const fetchBooks = useCallback(debounce(useFetchBooks(), 1000), [])

  useEffect(() => {
    fetchBooks(searchQuery)
  }, [searchQuery])
}

export { useAutoFetchBooks }
