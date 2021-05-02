import { useSearchQuery, useFetchBooks } from '../store/hooks'

const useSearchBooks = () => {
  const [searchQuery] = useSearchQuery()
  const fetchBooks = useFetchBooks()

  return () => {
    fetchBooks(searchQuery)
  }
}

export { useSearchBooks }
