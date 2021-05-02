import { nanoid } from 'nanoid'
import { fetchBooks as fetchBooksFromServer } from '../../api'
import {
  FETCH_SUGGESTS_LOADING,
  FETCH_SUGGESTS_SUCCESS,
  FETCH_SUGGESTS_ERROR,
} from '../actionTypes'

const MAX_NUM_OF_SUGGESTS = 5

const fetchSuggestsLoading = () => ({
  type: FETCH_SUGGESTS_LOADING,
})

const fetchSuggestsSuccess = (suggests) => ({
  type: FETCH_SUGGESTS_SUCCESS,
  payload: {
    suggests,
  },
})

const fetchSuggestsError = (errorMessage) => ({
  type: FETCH_SUGGESTS_ERROR,
  payload: {
    errorMessage,
  },
})

const fetchSuggests = (query) => async (dispatch) => {
  if (query.trim().length === 0) {
    return
  }

  dispatch(fetchSuggestsLoading())

  try {
    const { docs } = await fetchBooksFromServer(query, {
      limit: MAX_NUM_OF_SUGGESTS,
      fields: ['title'],
    })

    const suggests = docs.map(({ title }) => ({
      id: nanoid(),
      title,
    }))

    dispatch(fetchSuggestsSuccess(suggests))
  } catch (err) {
    dispatch(fetchSuggestsError(err))
  }
}

export { fetchSuggests }
