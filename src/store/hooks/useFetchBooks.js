import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchBooks } from 'store/actions'
import { useSearchQuery, useSearchPage } from 'store/hooks'

const useFetchBooks = () => {
  const [searchQuery] = useSearchQuery()
  const [searchPage] = useSearchPage()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBooks(searchQuery, searchPage))
  }, [searchQuery, searchPage])
}

export { useFetchBooks }
