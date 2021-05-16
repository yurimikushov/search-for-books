import { SET_SEARCH_QUERY } from 'store/actionTypes'

const searchQueryReducer = (state = '', { type, payload }) => {
  switch (type) {
    case SET_SEARCH_QUERY:
      return payload.query
    default:
      return state
  }
}

export default searchQueryReducer
