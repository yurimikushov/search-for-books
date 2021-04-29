import { SHOW_BOOK_POPUP } from '../actionTypes'

const showBookPopup = (book) => ({
  type: SHOW_BOOK_POPUP,
  payload: {
    book,
  },
})

export { showBookPopup }
