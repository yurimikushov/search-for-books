import { useHistory } from 'react-router-dom'

const useRedirect = () => {
  const history = useHistory()

  return (to) => history.push(to)
}

export { useRedirect }
