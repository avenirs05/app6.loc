import { combineReducers } from 'redux'
import realties from './realties'
import realtyShow from './realtyShow'
import realtyEdit from './realtyEdit'
import realtyStore from './realtyStore'
import feedbacks from './feedbacks'
import images from './images'
import isFirstLoading from './isFirstLoading'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  isFirstLoading,
  realties,  
  feedbacks,
  images,
  realtyShow,
  realtyEdit,
  realtyStore,
  form: formReducer
})