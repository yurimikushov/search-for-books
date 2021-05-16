import { SET_SUGGESTS_POPUP_PROPS } from 'store/actionTypes'

const setSuggestsPopupProps = ({ top, left, width }) => ({
  type: SET_SUGGESTS_POPUP_PROPS,
  payload: {
    top,
    left,
    width,
  },
})

export { setSuggestsPopupProps }
