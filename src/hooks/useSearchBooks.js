import { useSuggestsPopup, useSearchQuery, useFetchBooks } from '../store/hooks'
import { useRedirect } from '../hooks'

const useSearchBooks = () => {
  const { onHide: hideSuggestsPopup } = useSuggestsPopup()
  const [searchQuery] = useSearchQuery()
  const fetchBooks = useFetchBooks()
  const redirect = useRedirect()

  return () => {
    hideSuggestsPopup()
    fetchBooks(searchQuery)
    redirect(`/search?q=${searchQuery}&p=1`)
  }
}

export { useSearchBooks }
