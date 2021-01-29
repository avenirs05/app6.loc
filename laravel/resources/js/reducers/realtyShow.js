import { REALTY_SHOW } from '../actions/consts';

export default function realtyShow(state = {}, action) {
  switch (action.type) {
    case REALTY_SHOW:  
      delete action.type     
      return { ...action }    
      
    default:
      return state  
  }
}



