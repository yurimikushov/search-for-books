import { useRedirect } from 'hooks'

const useSearchBooks = () => {
  const redirect = useRedirect()

  return (searchQuery, page = 1) => {
    redirect(`/search?q=${searchQuery}&p=${page}`)
  }
}

export { useSearchBooks }
