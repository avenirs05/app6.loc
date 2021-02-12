import { FEEDBACK_SHOW } from '../actions/consts'


export default function feedbackShow(state = {realty: {}}, action) {
  switch (action.type) {
    case FEEDBACK_SHOW:        
      return action.payload 
      
    default: 
      return state  
  }
}