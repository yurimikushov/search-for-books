import { useSelector } from 'react-redux'

const useFoundBooks = () => {
  return useSelector((state) => state.foundBooks)
}

export { useFoundBooks }
