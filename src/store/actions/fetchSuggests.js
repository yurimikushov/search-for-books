import { fetchSuggests as fetchSuggestsFromServer } from 'api'
import { abortFetch } from 'utils'
import {
  FETCH_SUGGESTS_LOADING,
  FETCH_SUGGESTS_SUCCESS,
  FETCH_SUGGESTS_ERROR,
  FETCH_SUGGESTS_ABORT,
} from 'store/actionTypes'

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

const fetchSuggestsAbort = () => ({
  type: FETCH_SUGGESTS_ABORT,
})

const FETCH_NAME = 'fetchSuggests'

const fetchSuggests = (searchQuery) => async (dispatch) => {
  abortFetch(FETCH_NAME)

  dispatch(fetchSuggestsLoading())

  try {
    const suggests = await fetchSuggestsFromServer(searchQuery, {
      name: FETCH_NAME,
    })

    dispatch(fetchSuggestsSuccess(suggests))
  } catch (err) {
    if (err.name === 'AbortError') {
      dispatch(fetchSuggestsAbort())
    } else {
      dispatch(fetchSuggestsError(err.message))
    }
  }
}

export { fetchSuggests }
