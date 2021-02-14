import { GET_CONTENT } from '../actions/consts'


export default function content(state = {}, action) {
  switch (action.type) {
    case GET_CONTENT:      
      return action.payload      
      
    default:
      return state  
  }
}