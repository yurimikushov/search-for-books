import { useSuggestsPopup, useFetchBooks } from '../store/hooks'
import { useRedirect } from '../hooks'

const useSearchBooks = () => {
  const { onHide: hideSuggestsPopup } = useSuggestsPopup()
  const fetchBooks = useFetchBooks()
  const redirect = useRedirect()

  return (searchQuery) => {
    hideSuggestsPopup()
    fetchBooks(searchQuery)
    redirect(`/search?q=${searchQuery}&p=1`)
  }
}

export { useSearchBooks }
