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

    const getAuthor = (authors) =>
      authors && authors.length > 0 ? authors[0] : 'Unknown author'
    const getImg = (isbn) =>
      isbn && isbn.length > 0 ? makeImgUrl(isbn[0]) : ''
    const getISBN = (isbn) => (isbn && isbn[0]) || 'Unknown'
    const getPublisher = (publisher) =>
      publisher && publisher.length > 0 ? publisher[0] : 'Unknown publisher'
    const getPublishDate = (publishDate) =>
      publishDate && publishDate.length > 0
        ? publishDate[0]
        : 'Publish date unknown'

    const books = docs.map(
      ({ title, author_name: authors, isbn, publisher, publish_date }) => ({
        id: nanoid(),
        title,
        author: getAuthor(authors),
        img: getImg(isbn),
        isbn: getISBN(isbn),
        publisher: getPublisher(publisher),
        publishDate: getPublishDate(publish_date),
      })
    )

    dispatch(fetchBooksSuccess({ numFound, books }))
  } catch (err) {
    dispatch(fetchBooksError(err.message))
  }
}

export { fetchBooks }
