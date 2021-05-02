import { fetchBooks as fetchBooksFromServer } from '../../api'
import { docToBook } from '../../utils'
import {
  FETCH_BOOKS_LOADING,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_ERROR,
} from '../actionTypes'

const fetchBooksLoading = () => ({
  type: FETCH_BOOKS_LOADING,
})

const fetchBooksSuccess = ({ numFound, books }) => ({
  type: FETCH_BOOKS_SUCCESS,
  payload: {
    numFound,
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
    const { numFound, docs } = await fetchBooksFromServer(query, {
      limit: process.env.NUM_OF_BOOK_PER_PAGE,
      fields: ['title', 'author_name', 'isbn', 'publisher', 'publish_date'],
      page: 1,
    })

    const books = docs.map(docToBook)

    dispatch(fetchBooksSuccess({ numFound, books }))
  } catch (err) {
    dispatch(fetchBooksError(err.message))
  }
}

export { fetchBooks }
