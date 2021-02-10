import { REALTY_EDIT } from '../actions/consts';

export default function realtyEdit(state = {}, action) {
  switch (action.type) {
    case REALTY_EDIT:   
      const realtyFields = {...action}
      delete realtyFields.type        
      return realtyFields
    default:
      return state  
  }
}



