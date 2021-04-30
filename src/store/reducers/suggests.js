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
        ...initailState,
        isLoading: true,
      }
    case FETCH_SUGGESTS_SUCCESS:
      return {
        ...initailState,
        suggests: payload.suggests,
      }
    case FETCH_SUGGESTS_ERROR:
      return {
        ...initailState,
        error: payload.errorMessage,
      }
    default:
      return state
  }
}

export default suggestsReducer
