import { REALTY_SHOW } from '../actions/consts';

export default function realtyShow(state = {}, action) {
  switch (action.type) {
    case REALTY_SHOW:  
      const realtyFields = {...action}
      delete realtyFields.type        
      return realtyFields  
      
    default:
      return state  
  }
}



