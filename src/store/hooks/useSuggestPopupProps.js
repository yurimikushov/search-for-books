import { useSelector, useDispatch } from 'react-redux'
import { setSuggestsPopupProps } from '../actions'

const useSuggestPopupProps = () => {
  const { top, left, width } = useSelector(
    ({ suggestsPopupProps }) => suggestsPopupProps
  )

  const dispatch = useDispatch()

  return {
    top,
    left,
    width,
    setProps: (props) => dispatch(setSuggestsPopupProps(props)),
  }
}

export { useSuggestPopupProps }
