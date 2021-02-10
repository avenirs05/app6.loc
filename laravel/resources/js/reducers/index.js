import { combineReducers } from 'redux'

// Regular Reducers
import realties from './realties'
import realtyShow from './realtyShow'
import realtyEdit from './realtyEdit'
import realtyDelete from './realtyDelete'
import feedbacks from './feedbacks'
import feedbackShow from './feedbackShow'
import feedbackEdit from './feedbackEdit'
import formDataImages from './formDataImages'

// Redux Form Reducer
import { reducer as formReducer } from 'redux-form'

// Flags Reducers
import { isFirstLoading, 
         isAlertCreateVisible,
         isAlertUpdateVisible,
         isAlertDeleteVisible,         
         isJustCreatedRealty,         
         isJustUpdatedRealty,
         isJustDeletedRealty,
         isJustCreatedFeedback,
         isJustUpdatedFeedback,         
         isJustDeletedFeedback } from './flags'


export default combineReducers({ 
  realties,    
  realtyShow,
  realtyEdit,
  realtyDelete,
  feedbacks,
  feedbackShow,
  feedbackEdit,
  formDataImages, 
  form: formReducer,
  isFirstLoading,
  isJustCreatedRealty,
  isJustUpdatedRealty, 
  isJustDeletedRealty, 
  isJustCreatedFeedback,
  isJustUpdatedFeedback, 
  isJustDeletedFeedback, 
  isAlertCreateVisible,
  isAlertUpdateVisible,
  isAlertDeleteVisible, 
})