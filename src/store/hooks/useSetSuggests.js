import { useDispatch } from 'react-redux'
import { setSuggests } from '../actions'

const useSetSuggests = () => {
  const dispatch = useDispatch()

  return (suggests) => dispatch(setSuggests(suggests))
}

export { useSetSuggests }
