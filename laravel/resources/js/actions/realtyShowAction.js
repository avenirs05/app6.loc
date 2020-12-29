import { REALTY_SHOW } from './consts';
import { realtyAllDbFields } from '../script';

export function realtyShowAction(id) {
  return function(dispatch) {  
    axios.get(route('realties.show', id))                   
         .then(response => {                
            return dispatch({ 
              type: REALTY_SHOW, 
              ...realtyAllDbFields(response)
            })        
    })
  }
}
