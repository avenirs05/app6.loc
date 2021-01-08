import { SET_JUST_UPDATED_REALTY_TRUE } from '../actions/consts';
import { SET_JUST_UPDATED_REALTY_FALSE } from '../actions/consts';

export default function isJustUpdatedRealty(state = false, action) {
  switch (action.type) {
    case SET_JUST_UPDATED_REALTY_TRUE:
      return true
     
    case SET_JUST_UPDATED_REALTY_FALSE:
      return false  
    
    default:
      return state  
  }
}