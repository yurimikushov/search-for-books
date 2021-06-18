import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const useURLChangeObserver = (subscriberFunc) => {
  const { pathname, search } = useLocation()

  useEffect(() => {
    subscriberFunc()
  }, [pathname, search])
}

export { useURLChangeObserver }
