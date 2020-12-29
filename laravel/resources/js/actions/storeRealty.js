import { REALTY_STORE } from './consts';
import { realtyAllDbFields } from '../script';


export function storeRealty(values) {
  return function(dispatch) {  
    axios.post(route('realties.store'), { ...values }) 
         .then(response => { 
            return dispatch({ 
              type: REALTY_STORE, 
              ...realtyAllDbFields(response)
            })        
          })
  }
}

