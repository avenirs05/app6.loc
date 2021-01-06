import { REALTY_UPDATE } from '../actions/consts';

export default function realtyUpdate(state = {}, action) {
  switch (action.type) {
    case REALTY_UPDATE:     
      delete action.type
      return { ...action }
      
    default:
      return state  
  }
}



