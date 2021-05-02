import { nanoid } from 'nanoid'

const docToSuggest = ({ title }) => {
  return {
    id: nanoid(),
    title,
  }
}

export { docToSuggest }
