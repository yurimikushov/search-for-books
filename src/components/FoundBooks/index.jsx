import React from 'react'
import { useFoundBooks } from '../../store/hooks'
import FoundBook from './FoundBook'
import './index.css'

const FoundBooks = () => {
  const { isLoading, books } = useFoundBooks()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!isLoading && books.length === 0) {
    return <div>Нечего не найдено</div>
  }

  return (
    <div className='found-books'>
      {books.map(({ id, title, author, img }) => (
        <FoundBook key={id} book={{ title, author, img }} />
      ))}
    </div>
  )
}

export default FoundBooks
