import { combineReducers } from 'redux'
import realties from './realties'
import isFirstLoading from './isFirstLoading'

export default combineReducers({
  realties,
  isFirstLoading
})