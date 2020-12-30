import { REALTY_STORE } from '../actions/consts';

export default function realtyStore(state = {}, action) {
  switch (action.type) {
    case REALTY_STORE:     
      return { ...action }
      
    default:
      return state  
  }
}



