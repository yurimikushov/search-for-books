import { useSearchQuery } from '../store/hooks'
import { useSearchBooks, useFetchSuggests } from '../hooks'

const useChooseSuggest = () => {
  const [_, setSearchQuery] = useSearchQuery()
  const searchBooks = useSearchBooks()
  const fetchSuggests = useFetchSuggests()

  return (title) => {
    setSearchQuery(title)
    searchBooks(title)
    fetchSuggests(title)
  }
}

export { useChooseSuggest }
