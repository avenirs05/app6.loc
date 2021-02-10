import { FEEDBACK_SHOW } from '../actions/consts';

export default function feedbackShow(state = { realty: {} }, action) {
  switch (action.type) {
    case FEEDBACK_SHOW:        
      const feedbackFields = {...action}
      delete feedbackFields.type      
      return feedbackFields     
      
    default:
      return state  
  }
}