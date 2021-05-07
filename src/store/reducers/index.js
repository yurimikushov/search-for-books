import { combineReducers } from 'redux'
import searchQuery from './searchQuery'
import suggests from './suggests'
import suggestsPopup from './suggestsPopup'
import foundBooks from './foundBooks'
import bookPopup from './bookPopup'

const rootReducer = combineReducers({
  searchQuery,
  suggests,
  suggestsPopup,
  foundBooks,
  bookPopup,
})

export default rootReducer
