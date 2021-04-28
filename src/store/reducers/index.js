import { combineReducers } from 'redux'
import searchQuery from './searchQuery'
import suggests from './suggests'
import foundBooks from './foundBooks'

const rootReducer = combineReducers({
  searchQuery,
  suggests,
  foundBooks,
})

export default rootReducer
