import { SET_SEARCH_QUERY } from '../actionTypes'

const setSearchQuery = (query) => ({
  type: SET_SEARCH_QUERY,
  payload: {
    query,
  },
})

export { setSearchQuery }
