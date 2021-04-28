import {
  FETCH_BOOKS_LOADING,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_ERROR,
} from '../actionTypes'

const initailState = {
  isLoading: false,
  numFound: 0,
  books: [],
  error: '',
}

const foundBooksReducer = (state = initailState, { type, payload }) => {
  switch (type) {
    case FETCH_BOOKS_LOADING:
      return {
        ...initailState,
        isLoading: true,
      }
    case FETCH_BOOKS_SUCCESS:
      return {
        ...initailState,
        numFound: payload.numFound,
        books: payload.books,
      }
    case FETCH_BOOKS_ERROR:
      return {
        ...initailState,
        error: payload.errorMessage,
      }
    default:
      return state
  }
}

export default foundBooksReducer
