import React from 'react'
import PropTypes from 'prop-types'
import FoundBook from './FoundBook'
import './index.css'

const FoundBooks = ({ books, onOpen }) => (
  <div className='found-books'>
    {books.map((book) => (
      <FoundBook key={book.id} {...book} onOpen={() => onOpen(book.id)} />
    ))}
  </div>
)

FoundBooks.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onOpen: PropTypes.func.isRequired,
}

export default FoundBooks
