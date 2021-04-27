import {
  FETCH_SUGGESTS_LOADING,
  FETCH_SUGGESTS_SUCCESS,
  FETCH_SUGGESTS_ERROR,
} from '../actionTypes'

const initailState = {
  isLoading: false,
  suggests: [],
  error: '',
}

const suggestsReducer = (state = initailState, { type, payload }) => {
  switch (type) {
    case FETCH_SUGGESTS_LOADING:
      return {
        isLoading: true,
        suggests: [],
        error: '',
      }
    case FETCH_SUGGESTS_SUCCESS:
      return {
        isLoading: false,
        suggests: payload.suggests,
        error: '',
      }
    case FETCH_SUGGESTS_ERROR:
      return {
        isLoading: false,
        suggests: [],
        error: payload.errorMessage,
      }
    default:
      return state
  }
}

export default suggestsReducer
