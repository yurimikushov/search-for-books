import { useSelector } from 'react-redux'

const useSuggests = () => {
  return useSelector(({ suggests }) => suggests)
}

export { useSuggests }
