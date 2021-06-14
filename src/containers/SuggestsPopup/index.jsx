import React, { useRef } from 'react'
import { useSearchBooks } from 'hooks'
import { useSuggestsPopup, useSuggests, useFetchSuggests } from 'store/hooks'
import { useHideSuggestsPopup } from './hooks'
import SuggestsPopup from 'components/SuggestsPopup'
import Suggests from 'components/Suggests'

const SuggestsPopupContainer = () => {
  const suggestsPopupRef = useRef()

  useHideSuggestsPopup(suggestsPopupRef)

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
    <SuggestsPopup ref={suggestsPopupRef} top={top} left={left} width={width}>
      <Suggests suggests={suggests} onChoose={onChooseHandler} />
    </SuggestsPopup>
  )
}

export default SuggestsPopupContainer
