import { REALTY_EDIT } from './consts';
import { allRealtyDbFields } from '../script';

export function realtyEditAction(id) {
  return function(dispatch) {  
    axios.get(route('realties.edit', id))                   
         .then(response => {    
            const obj = {}
            allRealtyDbFields.forEach(prop => { 
              obj[prop] = response.data[prop] 
            })
            
            return dispatch({ 
              type: REALTY_EDIT, 
              ...obj
            })        
          })
  }
}