import { nanoid } from 'nanoid'
import { extractFirstAuthor } from './extractFirstAuthor'

const docToSuggest = ({ title, author_name: authors }) => {
  const author = extractFirstAuthor(authors)

  return {
    id: nanoid(),
    title,
    author,
  }
}

export { docToSuggest }
