import { useState, useEffect } from 'react'

const useSuggestsPopupProps = (formRef, inputBoxRef) => {
  const [suggestsPopupProps, setSuggestsPopupProps] = useState({
    top: 0,
    left: 0,
    width: 0,
  })

  const updateSuggestsPopupProps = () => {
    const { current: formNode } = formRef
    const { current: inputBoxNode } = inputBoxRef

    const { left, bottom } = formNode.getBoundingClientRect()

    setSuggestsPopupProps({
      top: bottom,
      left,
      width: inputBoxNode.clientWidth,
    })
  }

  useEffect(updateSuggestsPopupProps, [])

  useEffect(() => {
    window.addEventListener('resize', updateSuggestsPopupProps)
    return () => {
      window.removeEventListener('resize', updateSuggestsPopupProps)
    }
  }, [])

  return suggestsPopupProps
}

export { useSuggestsPopupProps }
