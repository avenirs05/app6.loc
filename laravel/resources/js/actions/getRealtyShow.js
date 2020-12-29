import { GET_REALTY_SHOW } from './consts';
import { realtyAllDbFields } from '../script';

export function getRealtyShow(id) {
  return function(dispatch) {  
    axios.get(route('realties.show', id))                   
         .then(response => {                
            return dispatch({ 
              type: GET_REALTY_SHOW, 
              ...realtyAllDbFields(response)
            })        
    })
  }
}
