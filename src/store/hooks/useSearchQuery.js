import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setSearchQuery } from '../actions'

const useSearchQuery = () => {
  const dispatch = useDispatch()

  return [
    useSelector((state) => state.searchQuery),
    (query) => dispatch(setSearchQuery(query)),
  ]
}

export { useSearchQuery }
