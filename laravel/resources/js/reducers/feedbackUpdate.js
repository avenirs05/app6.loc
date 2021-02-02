import { FEEDBACK_UPDATE } from '../actions/consts';

export default function feedbackUpdate(state = { realty: {} }, action) {
  switch (action.type) {
    case FEEDBACK_UPDATE:     
      delete action.type
      return { ...action }
      
    default:
      return state  
  }
}



