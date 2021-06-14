import { SET_SEARCH_QUERY } from 'store/actionTypes'

const setSearchQuery = (searchQuery) => ({
  type: SET_SEARCH_QUERY,
  payload: {
    searchQuery,
  },
})

export { setSearchQuery }
