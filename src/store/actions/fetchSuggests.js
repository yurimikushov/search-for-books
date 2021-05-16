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

const EVENT_NAME_OF_FETCHING_SUGGESTS = 'fetchSuggests'

const fetchSuggests = (query) => async (dispatch) => {
  abortFetch(EVENT_NAME_OF_FETCHING_SUGGESTS)

  dispatch(fetchSuggestsLoading())

  try {
    const suggests = await fetchSuggestsFromServer(query, {
      name: EVENT_NAME_OF_FETCHING_SUGGESTS,
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
