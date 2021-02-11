import { REALTY_SHOW } from '../actions/consts'

export default function realtyShow(state = {}, action) {
  switch (action.type) {
    case REALTY_SHOW:  
      return action.payload
      
    default:
      return state  
  }
}



