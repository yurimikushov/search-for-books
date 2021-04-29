import { combineReducers } from 'redux'
import searchQuery from './searchQuery'
import suggests from './suggests'
import foundBooks from './foundBooks'
import bookPopup from './bookPopup'

const rootReducer = combineReducers({
  searchQuery,
  suggests,
  foundBooks,
  bookPopup,
})

export default rootReducer
