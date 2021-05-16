import { useSuggestsPopup } from 'store/hooks'

const useActivateSearchQueryField = () => {
  const { onShow: showSuggestsPopup } = useSuggestsPopup()

  return () => {
    showSuggestsPopup()
  }
}

export { useActivateSearchQueryField }
