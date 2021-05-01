import { SHOW_BOOK_POPUP, HIDE_BOOK_POPUP } from '../actionTypes'

const initialState = {
  show: false,
  bookId: '',
}

const bookPopupReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_BOOK_POPUP:
      return {
        ...initialState,
        show: true,
        bookId: payload.bookId,
      }
    case HIDE_BOOK_POPUP:
      return {
        ...initialState,
        show: false,
      }
    default:
      return state
  }
}

export default bookPopupReducer
