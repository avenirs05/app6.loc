export default function realtyEdit(state = {}, action) {
  switch (action.type) {
    case 'GET_REALTY_EDIT':      
      return { ...action }
      
    default:
      return state  
  }
}



