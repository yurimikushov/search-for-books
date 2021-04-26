import { SET_SUGGESTS } from '../actionTypes'

const setSuggests = (suggests) => ({
  type: SET_SUGGESTS,
  payload: suggests,
})

export { setSuggests }
