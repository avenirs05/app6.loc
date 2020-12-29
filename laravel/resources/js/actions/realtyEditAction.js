import { REALTY_EDIT } from './consts';
import { realtyAllDbFields } from '../script';

export function realtyEditAction(id) {
  return function(dispatch) {  
    axios.get(route('realties.edit', id))                   
         .then(response => {                
            return dispatch({ 
              type: REALTY_EDIT, 
              ...realtyAllDbFields(response)
            })        
    })
  }
}
