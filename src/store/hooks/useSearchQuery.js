import { useSelector, useDispatch } from 'react-redux'
import { setSearchQuery } from 'store/actions'

const useSearchQuery = () => {
  const dispatch = useDispatch()

  return [
    useSelector(({ searchParams }) => searchParams.query),
    (query) => dispatch(setSearchQuery(query)),
  ]
}

export { useSearchQuery }
