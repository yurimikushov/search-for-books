import { SET_SEARCH_QUERY, SET_SEARCH_PAGE } from 'store/actionTypes'

const initialState = {
  query: '',
  page: 0,
}

const searchParamsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SEARCH_QUERY:
      return {
        ...state,
        query: payload.query,
      }
    case SET_SEARCH_PAGE:
      return {
        ...state,
        page: payload.page,
      }
    default:
      return state
  }
}

export default searchParamsReducer
