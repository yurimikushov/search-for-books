import React, { useRef, useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import { useSuggests } from '../../store/hooks'
import './index.css'

const SuggestsPopup = ({ top, left, width }) => {
  const suggestsRef = useRef()
  const [showSuggests, setShowSuggests] = useState(false)
  const { isLoading, suggests } = useSuggests()

  useEffect(() => {
    const closeHandler = ({ target }) => {
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

    window.addEventListener('click', closeHandler)
    return () => window.removeEventListener('click', closeHandler)
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
    <ul
      ref={suggestsRef}
      className='suggests-popup'
      style={{ position: 'absolute', top, left, width }}
    >
      {suggests.map(({ id, title }) => (
        <li key={id} className='suggests-popup__item'>
          {title}
        </li>
      ))}
    </ul>,
    document.querySelector('.suggests-popup-container')
  )
}

SuggestsPopup.propTypes = {
  top: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
}

export default SuggestsPopup
