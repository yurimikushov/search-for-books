import {
  SET_SUGGESTS_POPUP_PROPS,
  SHOW_SUGGESTS_POPUP,
  HIDE_SUGGESTS_POPUP,
} from '../actionTypes'

const initialState = {
  show: false,
  top: 0,
  left: 0,
  width: 0,
}

const suggestsPopupReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SUGGESTS_POPUP_PROPS:
      return {
        ...state,
        top: payload.top,
        left: payload.left,
        width: payload.width,
      }
    case SHOW_SUGGESTS_POPUP:
      return {
        ...state,
        show: true,
      }
    case HIDE_SUGGESTS_POPUP:
      return {
        ...state,
        show: false,
      }
    default:
      return state
  }
}

export default suggestsPopupReducer
