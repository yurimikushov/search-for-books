import {
  FETCH_BOOKS_LOADING,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_ERROR,
  FETCH_BOOKS_ABORT,
} from '../actionTypes'

const initailState = {
  isLoading: false,
  numPages: 0,
  currentPage: 0,
  books: [],
  error: '',
}

const foundBooksReducer = (state = initailState, { type, payload }) => {
  switch (type) {
    case FETCH_BOOKS_LOADING:
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        numPages: payload.numPages,
        currentPage: payload.currentPage,
        books: payload.books,
      }
    case FETCH_BOOKS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload.errorMessage,
      }
    case FETCH_BOOKS_ABORT:
      return {
        ...state,
        isLoading: false,
      }
    default:
      return state
  }
}

export default foundBooksReducer
