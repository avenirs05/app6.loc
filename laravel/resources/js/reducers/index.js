import { combineReducers } from 'redux'
import realties from './realties'
import realtyShow from './realtyShow'
import realtyEdit from './realtyEdit'
import realtyUpdate from './realtyUpdate'
import feedbacks from './feedbacks'
import images from './images'
import isFirstLoading from './isFirstLoading'
import isBtnUpdateRealtyClicked from './isBtnUpdateRealtyClicked'
import isAlertVisible from './isAlertVisible'
import { reducer as formReducer } from 'redux-form'


export default combineReducers({
  isFirstLoading,
  realties,  
  feedbacks,
  images,
  realtyShow,
  realtyEdit,
  realtyUpdate,  
  isBtnUpdateRealtyClicked,
  isAlertVisible,
  form: formReducer,
})