import { combineReducers } from 'redux'
import realties from './realties'
import realtyShow from './realtyShow'
import realtyEdit from './realtyEdit'
import realtyUpdate from './realtyUpdate'
import realtyDelete from './realtyDelete'
import feedbacks from './feedbacks'
import images from './images'
import isFirstLoading from './isFirstLoading'
import isJustCreatedRealty from './isJustCreatedRealty'
import isJustUpdatedRealty from './isJustUpdatedRealty'
import isJustDeletedRealty from './isJustDeletedRealty'
import isAlertCreateVisible from './isAlertCreateVisible'
import isAlertUpdateVisible from './isAlertUpdateVisible'
import isAlertDeleteVisible from './isAlertDeleteVisible'
import { reducer as formReducer } from 'redux-form'


export default combineReducers({
  isFirstLoading,
  realties,  
  feedbacks,
  images,
  realtyShow,
  realtyEdit,
  realtyUpdate,  
  realtyDelete,
  isJustCreatedRealty,
  isJustUpdatedRealty, 
  isJustDeletedRealty, 
  isAlertCreateVisible,
  isAlertUpdateVisible,
  isAlertDeleteVisible,  
  form: formReducer,
})