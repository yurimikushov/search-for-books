import React from 'react'
import { useSearchBooks } from 'hooks'
import { useSuggestsPopup, useSuggests, useFetchSuggests } from 'store/hooks'
import SuggestsPopup from 'components/SuggestsPopup'
import Suggests from 'components/Suggests'

const SuggestsPopupContainer = () => {
  const { show, top, left, width, onHide } = useSuggestsPopup()
  const { suggests } = useSuggests()
  const searchBooks = useSearchBooks()
  const fetchSuggests = useFetchSuggests()

  const onChooseHandler = (searchQuery) => {
    searchBooks(searchQuery)
    fetchSuggests(searchQuery)
    onHide()
  }

  if (!show) {
    return null
  }

  return (
    <SuggestsPopup top={top} left={left} width={width} onHide={onHide}>
      <Suggests suggests={suggests} onChoose={onChooseHandler} />
    </SuggestsPopup>
  )
}

export default SuggestsPopupContainer
