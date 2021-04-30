import React, { forwardRef } from 'react'
import { createPortal } from 'react-dom'
import Suggests from './Suggests'

const SuggestsPopup = forwardRef(
  ({ suggests, top, left, width }, suggestsRef) =>
    createPortal(
      <div
        ref={suggestsRef}
        className='suggests-popup__content'
        style={{ position: 'absolute', top, left, width }}
      >
        <Suggests suggests={suggests} />
      </div>,
      document.querySelector('.suggests-popup')
    )
)

export default SuggestsPopup
