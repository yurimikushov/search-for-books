import { useDispatch } from 'react-redux'
import { fetchBooks } from '../actions'

const useFetchBooks = () => {
  const dispatch = useDispatch()

  return (query) => dispatch(fetchBooks(query))
}

export { useFetchBooks }
