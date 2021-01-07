import { REALTY_DELETE } from '../actions/consts';

export default function realtyDelete(state = false, action) {
  switch (action.type) {
    case REALTY_DELETE:  
      return action.id
      
    default:
      return state  
  }
}



