import {
  FETCH_SUGGESTS_LOADING,
  FETCH_SUGGESTS_SUCCESS,
  FETCH_SUGGESTS_ERROR,
  FETCH_SUGGESTS_ABORT,
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
        ...state,
        isLoading: true,
      }
    case FETCH_SUGGESTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        suggests: payload.suggests,
      }
    case FETCH_SUGGESTS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload.errorMessage,
      }
    case FETCH_SUGGESTS_ABORT:
      return {
        ...state,
        isLoading: false,
      }
    default:
      return state
  }
}

export default suggestsReducer
