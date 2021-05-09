import { useEffect } from 'react'
import { useQueryParams, useSearchBooks } from '.'
import { useSearchQuery } from '../store/hooks'

const useAutoUpdateSearchQueryFromURL = () => {
  const { q: urlSearchQuery } = useQueryParams()
  const [searchQuery, setSearchQuery] = useSearchQuery()
  const searchBooks = useSearchBooks()

  useEffect(() => {
    if (urlSearchQuery !== searchQuery) {
      setSearchQuery(urlSearchQuery)
      searchBooks(urlSearchQuery)
    }
  }, [urlSearchQuery])
}

export { useAutoUpdateSearchQueryFromURL }
