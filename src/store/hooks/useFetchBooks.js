import { useDispatch } from 'react-redux'
import { fetchBooks } from '../actions'

const useFetchBooks = () => {
  const dispatch = useDispatch()

  return (searchQuery, page) => dispatch(fetchBooks(searchQuery, page))
}

export { useFetchBooks }
