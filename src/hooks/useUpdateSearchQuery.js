import {
  useSearchQuery,
  useFetchSuggests,
  useSuggestsPopup,
} from '../store/hooks'

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
