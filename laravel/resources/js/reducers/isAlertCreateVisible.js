import { SET_ALERT_CREATE_VISIBILITY_TRUE } from '../actions/consts';
import { SET_ALERT_CREATE_VISIBILITY_FALSE } from '../actions/consts';


export default function isAlertCreateVisible(state = false, action) {
  switch (action.type) {
    case SET_ALERT_CREATE_VISIBILITY_TRUE:
      return true
     
    case SET_ALERT_CREATE_VISIBILITY_FALSE:
      return false  
    
    default:
      return state  
  }
}



