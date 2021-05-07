import { useSelector, useDispatch } from 'react-redux'
import {
  setSuggestsPopupProps,
  showSuggestsPopup,
  hideSuggestsPopup,
} from '../actions'

const useSuggestsPopup = () => {
  const { show, top, left, width } = useSelector(
    ({ suggestsPopup }) => suggestsPopup
  )

  const dispatch = useDispatch()

  return {
    show,
    top,
    left,
    width,
    setProps: (props) => dispatch(setSuggestsPopupProps(props)),
    onShow: () => dispatch(showSuggestsPopup()),
    onHide: () => dispatch(hideSuggestsPopup()),
  }
}

export { useSuggestsPopup }
