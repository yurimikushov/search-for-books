import { combineReducers } from 'redux'
import searchQuery from './searchQuery'
import suggests from './suggests'

const rootReducer = combineReducers({
  searchQuery,
  suggests,
})

export default rootReducer
