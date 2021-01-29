import { combineReducers } from 'redux'

// Regular Reducers
import realties from './realties'
import realtyShow from './realtyShow'
import feedbackShow from './feedbackShow'
import realtyEdit from './realtyEdit'
import realtyUpdate from './realtyUpdate'
import realtyDelete from './realtyDelete'
import feedbacks from './feedbacks'
import images from './images'
import formDataImages from './formDataImages'

// Redux Form Reducer
import { reducer as formReducer } from 'redux-form'

// Flags Reducers
import { isAlertCreateVisible,
         isAlertUpdateVisible,
         isAlertDeleteVisible,
         isFirstLoading,
         isJustCreatedRealty,
         isJustUpdatedRealty,
         isJustDeletedRealty } from './flags'


export default combineReducers({
  isFirstLoading,
  realties,  
  feedbacks,
  feedbackShow,
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
  formDataImages, 
  form: formReducer,
})