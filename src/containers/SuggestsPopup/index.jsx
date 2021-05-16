import React, { useRef } from 'react'
import { useChooseSuggest } from '../../hooks'
import { useSuggestsPopup, useSuggests } from '../../store/hooks'
import { useHideSuggestsPopup } from './hooks'
import SuggestsPopup from '../../components/SuggestsPopup'
import Suggests from '../../components/Suggests'

const SuggestsPopupContainer = () => {
  const suggestsPopupRef = useRef()
  const { show, top, left, width } = useSuggestsPopup()
  const { suggests } = useSuggests()
  const onChooseSuggest = useChooseSuggest()

  useHideSuggestsPopup(suggestsPopupRef)

  if (!show) {
    return null
  }

  return (
    <SuggestsPopup top={top} left={left} width={width}>
      <Suggests
        ref={suggestsPopupRef}
        suggests={suggests}
        onChoose={onChooseSuggest}
      />
    </SuggestsPopup>
  )
}

export default SuggestsPopupContainer
