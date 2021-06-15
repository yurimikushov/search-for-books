import { useEffect } from 'react'
import { useSearchQuery, useSearchPage } from 'store/hooks'
import { useQueryParams } from 'hooks'

const useSaveURLSearchParamsToStore = () => {
  const { q = '', p = 0 } = useQueryParams()
  const setSearchQuery = useSearchQuery()[1]
  const setSearchPage = useSearchPage()[1]

  useEffect(() => {
    setSearchQuery(q)
    setSearchPage(p)
  }, [q, p])
}

export { useSaveURLSearchParamsToStore }
