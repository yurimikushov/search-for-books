import { SET_SUGGESTS_POPUP_PROPS } from '../actionTypes'

const initialState = {
  top: 0,
  left: 0,
  width: 0,
}

const suggestsPopupPropsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SUGGESTS_POPUP_PROPS:
      return {
        top: payload.top,
        left: payload.left,
        width: payload.width,
      }
    default:
      return state
  }
}

export default suggestsPopupPropsReducer
