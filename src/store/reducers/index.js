import { combineReducers } from 'redux'
import searchQuery from './searchQuery'
import suggests from './suggests'
import suggestsPopupProps from './suggestsPopupProps'
import foundBooks from './foundBooks'
import bookPopup from './bookPopup'

const rootReducer = combineReducers({
  searchQuery,
  suggests,
  suggestsPopupProps,
  foundBooks,
  bookPopup,
})

export default rootReducer
