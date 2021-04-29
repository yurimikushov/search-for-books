import { useBookPopup } from '../store/hooks'

const useShowBookPopup = () => {
  const [showBookPopup] = useBookPopup()

  return showBookPopup
}

export { useShowBookPopup }
