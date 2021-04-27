import { nanoid } from 'nanoid'
import { fetchSuggests as fetchSuggestsFromServer } from '../../api'
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
  dispatch(fetchSuggestsLoading())

  try {
    const suggests = []

    const { docs } = await fetchSuggestsFromServer(query)

    for (let i = 0; i < Math.min(docs.length, MAX_NUM_OF_SUGGESTS); i++) {
      suggests.push({
        id: nanoid(),
        title: docs[i].title,
      })
    }

    dispatch(fetchSuggestsSuccess(suggests))
  } catch (err) {
    dispatch(fetchSuggestsError(err))
  }
}

export { fetchSuggests }
