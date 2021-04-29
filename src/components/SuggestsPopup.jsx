import React, { useRef, useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import { useSuggests } from '../store/hooks'
import Suggests from './Suggests'

const SuggestsPopup = ({ top, left, width }) => {
  const suggestsRef = useRef()
  const [showSuggests, setShowSuggests] = useState(false)
  const { isLoading, suggests } = useSuggests()

  useEffect(() => {
    const onCloseHandler = ({ target }) => {
      if (!showSuggests) {
        return
      }

      if (!suggestsRef.current) {
        return
      }

      const isOutClick = !suggestsRef.current.contains(target)

      if (isOutClick) {
        setShowSuggests(false)
      }
    }

    window.addEventListener('click', onCloseHandler)
    return () => window.removeEventListener('click', onCloseHandler)
  }, [showSuggests])

  useEffect(() => {
    if (!isLoading && suggests.length > 0) {
      setShowSuggests(true)
    }
  }, [isLoading])

  if (!showSuggests) {
    return null
  }

  return createPortal(
    <div
      className='suggests-popup__content'
      style={{ position: 'absolute', top, left, width }}
    >
      <Suggests ref={suggestsRef} suggests={suggests} />
    </div>,
    document.querySelector('.suggests-popup')
  )
}

SuggestsPopup.propTypes = {
  top: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
}

export default SuggestsPopup
