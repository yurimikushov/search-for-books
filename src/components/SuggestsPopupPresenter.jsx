import React, { useRef, useState, useEffect } from 'react'
import { useSuggestPopupProps, useSuggests } from '../store/hooks'
import SuggestsPopup from './SuggestsPopup'

const SuggestsPopupPresenter = () => {
  const suggestsRef = useRef()
  const [show, setShow] = useState(false)
  const { top, left, width } = useSuggestPopupProps()
  const { isLoading, suggests } = useSuggests()

  const onShow = () => setShow(true)
  const onHide = () => setShow(false)

  useEffect(() => {
    const onCloseHandler = ({ target }) => {
      if (!show) {
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

  useEffect(() => {
    if (!isLoading && suggests.length > 0) {
      onShow()
    }
  }, [isLoading])

  if (!show) {
    return null
  }

  return (
    <SuggestsPopup
      ref={suggestsRef}
      suggests={suggests}
      top={top}
      left={left}
      width={width}
    />
  )
}

export default SuggestsPopupPresenter
