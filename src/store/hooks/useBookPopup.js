import { useSelector, useDispatch } from 'react-redux'
import { showBookPopup, hideBookPopup } from '../actions'

const useBookPopup = () => {
  const { show, bookId } = useSelector(({ bookPopup }) => bookPopup)
  const dispatch = useDispatch()

  return {
    show,
    bookId,
    onShow: (bookId) => dispatch(showBookPopup(bookId)),
    onHide: () => dispatch(hideBookPopup()),
  }
}

export { useBookPopup }
