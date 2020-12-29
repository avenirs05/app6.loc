export default function realtyShow(state = {}, action) {
  switch (action.type) {
    case 'GET_REALTY_SHOW':      
      return { ...action }
      
    default:
      return state  
  }
}



