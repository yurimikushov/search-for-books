import { useSelector, useDispatch } from 'react-redux'
import { setSearchQuery } from 'store/actions'

const useSearchQuery = () => {
  const dispatch = useDispatch()

  return [
    useSelector(({ searchQuery }) => searchQuery),
    (query) => dispatch(setSearchQuery(query)),
  ]
}

export { useSearchQuery }
