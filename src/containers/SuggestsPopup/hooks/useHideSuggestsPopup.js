import { useEffect } from 'react'
import { useSuggestsPopup } from 'store/hooks'

const useHideSuggestsPopup = (suggestsPopupRef) => {
  const { show, onHide } = useSuggestsPopup()

  useEffect(() => {
    if (!show) {
      return
    }

    const { current: suggestsPopup } = suggestsPopupRef

    const onCloseHandler = ({ target }) => {
      if (!show) {
        return
      }

      if (!suggestsPopup || !suggestsPopup.contains(target)) {
        onHide()
      }
    }

    addEventListener('click', onCloseHandler)

    return () => {
      removeEventListener('click', onCloseHandler)
    }
  }, [show])
}

export { useHideSuggestsPopup }
