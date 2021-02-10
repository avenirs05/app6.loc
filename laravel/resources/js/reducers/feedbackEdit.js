import { FEEDBACK_EDIT } from '../actions/consts';

export default function feedbackEdit(state = {}, action) {
  switch (action.type) {
    case FEEDBACK_EDIT:   
      const feedbackFields = {...action}
      delete feedbackFields.type        
      return feedbackFields
      
    default:
      return state  
  }
}



