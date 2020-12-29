import { GET_REALTY_EDIT } from './consts';
import { realtyAllDbFields } from '../script';

export function getRealtyEdit(id) {
  return function(dispatch) {  
    axios.get(route('realties.edit', id))                   
         .then(response => {                
            return dispatch({ 
              type: GET_REALTY_EDIT, 
              ...realtyAllDbFields(response)
            })        
    })
  }
}
