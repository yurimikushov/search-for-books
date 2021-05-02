import { nanoid } from 'nanoid'
import { extractFirstAuthor } from './extractFirstAuthor'
import { extractFirstISBN } from './extractFirstISBN'
import { extractFirstPublisher } from './extractFirstPublisher'
import { extractFirstPublishDate } from './extractFirstPublishDate'

const createImgUrl = (isbn) => {
  return process.env.BOOK_COVER_API.replace('${isbn}', isbn)
}

const docToBook = ({
  title,
  author_name: authors,
  isbn: ISBNs,
  publisher: publishers,
  publish_date: publishDates,
}) => {
  const author = extractFirstAuthor(authors) || 'Unknown author'
  const isbn = extractFirstISBN(ISBNs) || 'Unknown'
  const publisher = extractFirstPublisher(publishers) || 'Unknown publisher'
  const publishDate =
    extractFirstPublishDate(publishDates) || 'Publish date unknown'

  return {
    id: nanoid(),
    title,
    author,
    img: createImgUrl(isbn),
    isbn,
    publisher,
    publishDate,
  }
}

export { docToBook }
