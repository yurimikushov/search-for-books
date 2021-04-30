import { useSelector } from 'react-redux'

const useFoundBooks = () => {
  return useSelector(({ foundBooks }) => foundBooks)
}

export { useFoundBooks }
