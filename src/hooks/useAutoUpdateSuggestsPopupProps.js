import { useEffect } from 'react'
import { isSmallScreen } from '../utils'
import { useSuggestsPopup } from '../store/hooks'

const useAutoUpdateSuggestsPopupProps = (formRef, inputBoxRef) => {
  const { setProps } = useSuggestsPopup()

  const updateSuggestsPopupProps = () => {
    const { current: formNode } = formRef
    const { current: inputBoxNode } = inputBoxRef

    const { left, bottom } = formNode.getBoundingClientRect()
    const width = isSmallScreen()
      ? formNode.clientWidth
      : inputBoxNode.clientWidth

    setProps({
      top: bottom,
      left,
      width,
    })
  }

  useEffect(updateSuggestsPopupProps, [])

  useEffect(() => {
    window.addEventListener('resize', updateSuggestsPopupProps)
    return () => {
      window.removeEventListener('resize', updateSuggestsPopupProps)
    }
  }, [])
}

export { useAutoUpdateSuggestsPopupProps }
