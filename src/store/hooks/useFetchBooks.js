import { useDispatch } from 'react-redux'
import { fetchBooks } from 'store/actions'

const useFetchBooks = () => {
  const dispatch = useDispatch()

  return (searchQuery, searchPage) => {
    dispatch(fetchBooks(searchQuery, searchPage))
  }
}

export { useFetchBooks }
