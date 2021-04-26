import { SET_SUGGESTS } from '../actionTypes'

const suggestsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case SET_SUGGESTS:
      return payload
    default:
      return state
  }
}

export default suggestsReducer
