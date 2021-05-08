import { useSearchQuery } from '../store/hooks'
import { useSearchBooks } from '../hooks'

const useChooseSuggest = () => {
  const [_, setSearchQuery] = useSearchQuery()
  const searchBooks = useSearchBooks()

  return (title) => {
    setSearchQuery(title)
    searchBooks(title)
  }
}

export { useChooseSuggest }
