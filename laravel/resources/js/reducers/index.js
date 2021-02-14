// Libs
import { combineReducers } from 'redux'

// Regular Reducers
import realties from './realties'
import realtyEdit from './realtyEdit'
import realtyDelete from './realtyDelete'
import feedbacks from './feedbacks'
import feedbackEdit from './feedbackEdit'
import formDataImages from './formDataImages'
import content from './content'

// Redux Form Reducer
import { reducer as formReducer } from 'redux-form'

// Flags Reducers
import { isFirstLoading, 
         isAlertCreateVisible,
         isAlertUpdateVisible,
         isAlertDeleteVisible,    
         isJustCreatedResource,    
         isJustUpdatedResource,
         isJustDeletedResource } from './flags'


export default combineReducers({ 
  realties,    
  realtyEdit,
  realtyDelete,
  feedbacks,
  feedbackEdit,
  formDataImages, 
  form: formReducer,
  content,
  isFirstLoading,
  isJustCreatedResource,
  isJustUpdatedResource,
  isJustDeletedResource,
  isAlertCreateVisible,
  isAlertUpdateVisible,
  isAlertDeleteVisible, 
})