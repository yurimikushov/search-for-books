import React from 'react'
import { useFoundBooks } from '../../store/hooks'

const FoundBooks = () => {
  const { isLoading, books } = useFoundBooks()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!isLoading && books.length === 0) {
    return <div>Нечего не найдено</div>
  }

  return (
    <div>
      {books.map(({ id, img, title, author }) => (
        <div
          style={{
            display: 'inline-block',
            padding: '5px',
            height: '150px',
            width: '100px',
            border: '1px solid black',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <img key={id} src={img} alt={title} style={{ height: '100px' }} />
            <span>{title || 'unknown'}</span>
            <span>{author || 'unknown'}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FoundBooks
