import { useSuggestsPopup, useFetchBooks } from 'store/hooks'
import { useRedirect } from 'hooks'

const useSearchBooks = () => {
  const { onHide: hideSuggestsPopup } = useSuggestsPopup()
  const fetchBooks = useFetchBooks()
  const redirect = useRedirect()

  return (searchQuery, page = 1) => {
    hideSuggestsPopup()
    fetchBooks(searchQuery, page)
    redirect(`/search?q=${searchQuery}&p=${page}`)
  }
}

export { useSearchBooks }
