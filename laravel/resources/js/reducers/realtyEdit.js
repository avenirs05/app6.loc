import { REALTY_EDIT } from '../actions/consts';

export default function realtyEdit(state = {}, action) {
  switch (action.type) {
    case REALTY_EDIT:   
      delete action.type   
      return action
      
    default:
      return state  
  }
}



