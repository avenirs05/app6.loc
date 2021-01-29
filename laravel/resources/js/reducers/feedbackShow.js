import { FEEDBACK_SHOW } from '../actions/consts';

export default function feedbackShow(state = { realty: {} }, action) {
  switch (action.type) {
    case FEEDBACK_SHOW:   
      delete action.type        
      return { ...action }     
      
    default:
      return state  
  }
}



