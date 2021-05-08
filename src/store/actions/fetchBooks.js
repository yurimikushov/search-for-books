import { fetchBooks as fetchBooksFromServer } from '../../api'
import { abortFetch } from '../../utils'
import {
  FETCH_BOOKS_LOADING,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_ERROR,
  FETCH_BOOKS_ABORT,
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

const fetchBooksAbort = () => ({
  type: FETCH_BOOKS_ABORT,
})

const EVENT_NAME_OF_FETCHING_BOOKS = 'fetchBooks'

const fetchBooks = (query) => async (dispatch) => {
  abortFetch(EVENT_NAME_OF_FETCHING_BOOKS)

  dispatch(fetchBooksLoading())

  try {
    const { numPages, books } = await fetchBooksFromServer(query, {
      name: EVENT_NAME_OF_FETCHING_BOOKS,
    })

    dispatch(fetchBooksSuccess({ numPages, books }))
  } catch (err) {
    if (err.name === 'AbortError') {
      dispatch(fetchBooksAbort())
    } else {
      dispatch(fetchBooksError(err.message))
    }
  }
}

export { fetchBooks }
