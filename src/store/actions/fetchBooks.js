import { nanoid } from 'nanoid'
import { fetchBooks as fetchBooksFromServer } from '../../api'
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
    const { numFound, docs } = await fetchBooksFromServer(query)

    const makeImgUrl = (isbn) => {
      return `http://covers.openlibrary.org/b/isbn/${isbn}.jpg`
    }

    const books = docs.map(
      ({ key: ref, title, author_name: authors, isbn }) => ({
        id: nanoid(),
        ref,
        title,
        author: authors && authors.length > 0 ? authors[0] : '',
        img: isbn && isbn.length > 0 ? makeImgUrl(isbn[0]) : '',
      })
    )

    dispatch(fetchBooksSuccess({ numFound, books }))
  } catch (err) {
    dispatch(fetchBooksError(err.message))
  }
}

export { fetchBooks }
