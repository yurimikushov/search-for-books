import { SHOW_BOOK_POPUP } from 'store/actionTypes'

const showBookPopup = (bookId) => ({
  type: SHOW_BOOK_POPUP,
  payload: {
    bookId,
  },
})

export { showBookPopup }
