import React, { useRef, useEffect } from 'react'
import { useChooseSuggest } from '../hooks'
import { useSuggestsPopup, useSuggests } from '../store/hooks'
import SuggestsPopup from '../components/SuggestsPopup'
import Suggests from '../components/Suggests'

const SuggestsPopupContainer = () => {
  const suggestsRef = useRef()
  const { show, top, left, width, onHide } = useSuggestsPopup()
  const { suggests } = useSuggests()
  const chooseSuggest = useChooseSuggest()

  useEffect(() => {
    const onCloseHandler = ({ target }) => {
      if (!show) {
        return
      }

      if (!suggestsRef.current) {
        onHide()
        return
      }

      const isOutClick = !suggestsRef.current.contains(target)

      if (isOutClick) {
        onHide()
      }
    }

    window.addEventListener('click', onCloseHandler)
    return () => window.removeEventListener('click', onCloseHandler)
  }, [show])

  if (!show) {
    return null
  }

  const onChooseSuggest = (title) => {
    chooseSuggest(title)
  }

  return (
    <SuggestsPopup top={top} left={left} width={width}>
      <Suggests
        ref={suggestsRef}
        suggests={suggests}
        onChoose={onChooseSuggest}
      />
    </SuggestsPopup>
  )
}

export default SuggestsPopupContainer
