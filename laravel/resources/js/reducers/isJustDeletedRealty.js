import { SET_JUST_DELETED_REALTY_TRUE } from '../actions/consts';
import { SET_JUST_DELETED_REALTY_FALSE } from '../actions/consts';

export default function isJustDeletedRealty(state = false, action) {
  switch (action.type) {
    case SET_JUST_DELETED_REALTY_TRUE:
      return true
     
    case SET_JUST_DELETED_REALTY_FALSE:
      return false  
    
    default:
      return state  
  }
}