import { useSearchQuery, useSuggestsPopup } from '../store/hooks'
import { useFetchSuggests } from '../hooks'

const useUpdateSearchQuery = () => {
  const [_, setSearchQuery] = useSearchQuery()
  const fetchSuggests = useFetchSuggests()
  const { onShow: showSuggestsPopup } = useSuggestsPopup()

  return (searchQuery = '') => {
    setSearchQuery(searchQuery)
    fetchSuggests(searchQuery)
    showSuggestsPopup()
  }
}

export { useUpdateSearchQuery }
