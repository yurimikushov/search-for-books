import { useLocation } from 'react-router-dom'

const useQueryParams = () => {
  const query = new URLSearchParams(useLocation().search)

  const params = {}

  for (const [name, value] of query.entries()) {
    params[name] = value
  }

  if ('p' in params) {
    params.p = parseInt(params.p)
  }

  return params
}

export { useQueryParams }
