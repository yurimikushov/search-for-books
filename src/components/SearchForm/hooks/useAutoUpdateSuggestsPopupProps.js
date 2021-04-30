import { useEffect } from 'react'
import { useSuggestPopupProps } from '../../../store/hooks'

const useAutoUpdateSuggestsPopupProps = (formRef, inputBoxRef) => {
  const { setProps } = useSuggestPopupProps()

  const updateSuggestsPopupProps = () => {
    const { current: formNode } = formRef
    const { current: inputBoxNode } = inputBoxRef

    const { left, bottom } = formNode.getBoundingClientRect()

    setProps({
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
}

export { useAutoUpdateSuggestsPopupProps }
