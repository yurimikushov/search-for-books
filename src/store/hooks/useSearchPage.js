import { useSelector, useDispatch } from 'react-redux'
import { setSearchPage } from 'store/actions'

const useSearchPage = () => {
  const dispatch = useDispatch()

  return [
    useSelector(({ searchParams }) => searchParams.page),
    (page) => dispatch(setSearchPage(page)),
  ]
}

export { useSearchPage }
