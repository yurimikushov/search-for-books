import { useSearchQuery, useFetchBooks } from '../store/hooks'
import { useRedirect } from '../hooks'

const useSearchBooks = () => {
  const [searchQuery] = useSearchQuery()
  const fetchBooks = useFetchBooks()
  const redirect = useRedirect()

  return () => {
    fetchBooks(searchQuery)
    redirect(`/search?q=${searchQuery}&p=1`)
  }
}

export { useSearchBooks }
