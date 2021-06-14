import { useEffect } from 'react'
import { useQueryParams } from 'hooks'
import { useFetchBooks as useFetchBooksToStore } from 'store/hooks'

const useFetchBooks = () => {
  const { q, p } = useQueryParams()

  const fetchBooks = useFetchBooksToStore()

  useEffect(() => {
    fetchBooks(q, p)
  }, [q, p])
}

export { useFetchBooks }
