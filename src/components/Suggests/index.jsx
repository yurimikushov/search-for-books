import React from 'react'
import PropTypes from 'prop-types'
import Suggest from './Suggest'
import './index.css'

const Suggests = ({ suggests, onChoose }) => (
  <ul className='suggests'>
    {suggests.map(({ id, title, author }) => (
      <Suggest
        key={id}
        title={title}
        author={author}
        onChoose={() => onChoose(title)}
      />
    ))}
  </ul>
)

Suggests.propTypes = {
  suggests: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })
  ),
  onChoose: PropTypes.func.isRequired,
}

Suggests.displayName = 'Suggests'

export default Suggests
