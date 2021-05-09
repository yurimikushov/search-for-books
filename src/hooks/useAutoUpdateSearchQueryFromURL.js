import { useEffect } from 'react'
import { useQueryParams } from '../hooks'
import { useSearchQuery, useFetchBooks, useFetchSuggests } from '../store/hooks'

const useAutoUpdateSearchQueryFromURL = () => {
  const { q: urlSearchQuery } = useQueryParams()
  const [searchQuery, setSearchQuery] = useSearchQuery()
  const fetchBooks = useFetchBooks()
  const fetchSuggests = useFetchSuggests()

  useEffect(() => {
    if (urlSearchQuery !== searchQuery) {
      setSearchQuery(urlSearchQuery)
      fetchBooks(urlSearchQuery)
      fetchSuggests(urlSearchQuery)
    }
  }, [urlSearchQuery])
}

export { useAutoUpdateSearchQueryFromURL }
