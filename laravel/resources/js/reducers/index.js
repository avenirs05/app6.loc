import { combineReducers } from 'redux'

// Regular Reducers
import realties from './realties'
import realtyShow from './realtyShow'
import realtyEdit from './realtyEdit'
import realtyUpdate from './realtyUpdate'
import realtyDelete from './realtyDelete'
import feedbacks from './feedbacks'
import feedbackShow from './feedbackShow'
import feedbackUpdate from './feedbackUpdate'
import feedbackEdit from './feedbackEdit'
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
         isJustUpdatedFeedback,
         isJustDeletedRealty,
         isJustDeletedFeedback } from './flags'


export default combineReducers({
  isFirstLoading,
  realties,  
  feedbacks,
  feedbackShow,
  feedbackEdit,
  feedbackUpdate,
  images,
  realtyShow,
  realtyEdit,
  realtyUpdate,  
  realtyDelete,
  isJustCreatedRealty,
  isJustUpdatedRealty, 
  isJustUpdatedFeedback, 
  isJustDeletedRealty, 
  isJustDeletedFeedback, 
  isAlertCreateVisible,
  isAlertUpdateVisible,
  isAlertDeleteVisible, 
  formDataImages, 
  form: formReducer,
})