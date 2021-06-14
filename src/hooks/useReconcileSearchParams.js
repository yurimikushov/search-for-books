import { useEffect } from 'react'
import { useSearchQuery, useSearchPage } from 'store/hooks'
import { useQueryParams } from 'hooks'

const useReconcileSearchParams = () => {
  const { q, p } = useQueryParams()
  const [searchQuery, setSearchQuery] = useSearchQuery()
  const [searchPage, setSearchPage] = useSearchPage()

  useEffect(() => {
    if (searchQuery !== q) {
      setSearchQuery(q)
    }

    if (searchPage !== p) {
      setSearchPage(p)
    }
  }, [])
}

export { useReconcileSearchParams }
