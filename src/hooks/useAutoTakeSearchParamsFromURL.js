import { useEffect } from 'react'
import {
  useSearchQuery,
  useSearchPage,
  useFetchBooks,
  useFetchSuggests,
} from 'store/hooks'
import { useQueryParams } from 'hooks'

const useAutoTakeSearchParamsFromURL = () => {
  const { q: urlSearchQuery, p: urlSearchPage } = useQueryParams()
  const [searchQuery, setSearchQuery] = useSearchQuery()
  const [searchPage, setSearchPage] = useSearchPage()
  const fetchBooks = useFetchBooks()
  const fetchSuggests = useFetchSuggests()

  useEffect(() => {
    if (
      urlSearchQuery !== searchQuery ||
      parseInt(urlSearchPage) !== searchPage
    ) {
      setSearchQuery(urlSearchQuery)
      setSearchPage(parseInt(urlSearchPage))
      fetchBooks(urlSearchQuery, urlSearchPage)
      fetchSuggests(urlSearchQuery)
    }
  }, [urlSearchQuery, urlSearchPage])
}

export { useAutoTakeSearchParamsFromURL }
