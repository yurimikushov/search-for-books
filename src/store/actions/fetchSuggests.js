import { fetchSuggests as fetchSuggestsFromServer } from '../../api'
import {
  FETCH_SUGGESTS_LOADING,
  FETCH_SUGGESTS_SUCCESS,
  FETCH_SUGGESTS_ERROR,
} from '../actionTypes'

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
    const suggests = await fetchSuggestsFromServer(query)
    dispatch(fetchSuggestsSuccess(suggests))
  } catch (err) {
    dispatch(fetchSuggestsError(err))
  }
}

export { fetchSuggests }
