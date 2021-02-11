import { FEEDBACK_EDIT } from '../actions/consts';

export default function feedbackEdit(state = {}, action) {
  switch (action.type) {
    case FEEDBACK_EDIT:   
      return action.payload
      
    default:
      return state  
  }
}



