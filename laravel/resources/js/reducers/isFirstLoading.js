import { SET_FIRST_LOADING_FALSE } from '../actions/consts';
import { SET_FIRST_LOADING_TRUE } from '../actions/consts';


export default function isFirstLoading(state = true, action) {
  switch (action.type) {
    case SET_FIRST_LOADING_FALSE:
      return false
     
    case SET_FIRST_LOADING_TRUE:
      return true  
    
    default:
      return state  
  }
}



