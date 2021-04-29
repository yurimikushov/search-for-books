import { useSelector, useDispatch } from 'react-redux'
import { showBookPopup, hideBookPopup } from '../actions'

const useBookPopup = () => {
  const { show, book } = useSelector((state) => state.bookPopup)
  const dispatch = useDispatch()

  return {
    show,
    book,
    onShow: (book) => dispatch(showBookPopup(book)),
    onHide: () => dispatch(hideBookPopup()),
  }
}

export { useBookPopup }
