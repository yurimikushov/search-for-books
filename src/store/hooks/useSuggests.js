import { useSelector } from 'react-redux'

const useSuggests = () => {
  return useSelector((state) => state.suggests)
}

export { useSuggests }
