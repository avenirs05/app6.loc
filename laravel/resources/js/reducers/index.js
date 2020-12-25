import { combineReducers } from 'redux'
import realties from './realties'
import realtyShow from './realtyShow'
import feedbacks from './feedbacks'
import images from './images'
import isFirstLoading from './isFirstLoading'

export default combineReducers({
  isFirstLoading,
  realties,  
  feedbacks,
  images,
  realtyShow
})