import { SET_SEARCH_PAGE } from 'store/actionTypes'

const setSearchPage = (page) => ({
  type: SET_SEARCH_PAGE,
  payload: {
    page,
  },
})

export { setSearchPage }
