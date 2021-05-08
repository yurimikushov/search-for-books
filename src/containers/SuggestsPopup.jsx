import React, { useRef, useEffect } from 'react'
import { useSuggestsPopup, useSuggests } from '../store/hooks'
import SuggestsPopup from '../components/SuggestsPopup'
import Suggests from '../components/Suggests'

const SuggestsPopupContainer = () => {
  const suggestsRef = useRef()
  const { show, top, left, width, onShow, onHide } = useSuggestsPopup()
  const { suggests } = useSuggests()

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

  return (
    <SuggestsPopup top={top} left={left} width={width}>
      <Suggests ref={suggestsRef} suggests={suggests} />
    </SuggestsPopup>
  )
}

export default SuggestsPopupContainer
