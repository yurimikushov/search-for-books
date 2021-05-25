import { combineReducers } from 'redux'
import searchParams from './searchParams'
import suggests from './suggests'
import suggestsPopup from './suggestsPopup'
import foundBooks from './foundBooks'
import bookPopup from './bookPopup'

const rootReducer = combineReducers({
  searchParams,
  suggests,
  suggestsPopup,
  foundBooks,
  bookPopup,
})

export default rootReducer
