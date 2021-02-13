import { GET_CONTENT } from '../actions/consts'

const contentInit = {
  content: {},
}

export default function realties(state = contentInit, action) {
  switch (action.type) {
    case GET_CONTENT:      
      return {
        content: action.payload.content,
      }
      
    default:
      return state  
  }
}