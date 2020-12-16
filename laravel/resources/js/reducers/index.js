import { combineReducers } from 'redux'
import realties from './realties'
import feedbacks from './feedbacks'
import isFirstLoading from './isFirstLoading'

export default combineReducers({
  isFirstLoading,
  realties,  
  feedbacks
})