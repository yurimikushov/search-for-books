import { useDispatch } from 'react-redux'
import { fetchSuggests } from '../actions'

const useFetchSuggests = () => {
  const dispatch = useDispatch()

  return (query) => dispatch(fetchSuggests(query))
}

export { useFetchSuggests }
