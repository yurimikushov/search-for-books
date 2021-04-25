import { useState, useEffect } from 'react'

const useDynamicSuggestsParams = (formRef, inputBoxRef) => {
  const [dynamicSuggestsProps, setDynamicSuggestsProps] = useState({
    top: 0,
    left: 0,
    width: 0,
  })

  const updateDynamicSuggestsParams = () => {
    const { left, bottom } = formRef.current.getBoundingClientRect()

    setDynamicSuggestsProps({
      top: bottom,
      left,
      width: inputBoxRef.current.clientWidth,
    })
  }

  useEffect(updateDynamicSuggestsParams, [])

  useEffect(() => {
    window.addEventListener('resize', updateDynamicSuggestsParams)
    return () => {
      window.removeEventListener('resize', updateDynamicSuggestsParams)
    }
  }, [])

  return dynamicSuggestsProps
}

export { useDynamicSuggestsParams }
