import { useEffect } from 'react'
import { useBookPopup } from '../../../store/hooks'

const useHideBookPopup = (bookPopupRef) => {
  const { show, onHide } = useBookPopup()

  useEffect(() => {
    if (!show) {
      return
    }

    const onCloseHanler = ({ target }) => {
      const isOutClick = !bookPopupRef.current.contains(target)

      if (isOutClick) {
        onHide()
      }
    }

    addEventListener('click', onCloseHanler)

    return () => {
      removeEventListener('click', onCloseHanler)
    }
  }, [show])

  useEffect(() => {
    const onCloseHandler = ({ key }) => {
      if (show && key === 'Escape') {
        onHide()
      }
    }

    addEventListener('keydown', onCloseHandler)

    return () => {
      removeEventListener('keydown', onCloseHandler)
    }
  }, [show])
}

export { useHideBookPopup }
