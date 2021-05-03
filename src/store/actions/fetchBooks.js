import { fetchBooks as fetchBooksFromServer } from '../../api'
import {
  FETCH_BOOKS_LOADING,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_ERROR,
} from '../actionTypes'

const fetchBooksLoading = () => ({
  type: FETCH_BOOKS_LOADING,
})

const fetchBooksSuccess = ({ numPages, books }) => ({
  type: FETCH_BOOKS_SUCCESS,
  payload: {
    numPages,
    books,
  },
})

const fetchBooksError = (errorMessage) => ({
  type: FETCH_BOOKS_ERROR,
  payload: {
    errorMessage,
  },
})

const fetchBooks = (query) => async (dispatch) => {
  dispatch(fetchBooksLoading())

  try {
    const { numPages, books } = await fetchBooksFromServer(query)
    dispatch(fetchBooksSuccess({ numPages, books }))
  } catch (err) {
    dispatch(fetchBooksError(err.message))
  }
}

export { fetchBooks }
