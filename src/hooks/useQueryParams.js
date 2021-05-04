import { useLocation } from 'react-router-dom'

const useQueryParams = () => {
  const query = new URLSearchParams(useLocation().search)

  const params = {}

  for (const [name, value] of query.entries()) {
    params[name] = value
  }

  return params
}

export { useQueryParams }
