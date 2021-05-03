import React from 'react'
import { useFoundBooks } from '../../store/hooks'
import Alert from '../Alert'
import FoundBook from './FoundBook'
import './index.css'

const FoundBooks = () => {
  const { isLoading, books } = useFoundBooks()

  if (isLoading) {
    return <Alert title='Ищу...' />
  }

  if (!isLoading && books.length === 0) {
    return <Alert title='Ничего не нашлось' />
  }

  return (
    <div className='found-books'>
      {books.map((book) => (
        <FoundBook key={book.id} {...book} />
      ))}
    </div>
  )
}

export default FoundBooks
