import { REALTY_STORE } from './consts';
import { realtyAllDbFields } from '../script';
import { SET_BTN_UPDATE_REALTY_CLICKED_TRUE } from './consts';

export function realtyStoreAction(values) {
  return function(dispatch) {  
    delete values.type    
    axios.post(route('realties.store'), { ...values }) 
         .then(response => { 
            return dispatch({ 
              type: REALTY_STORE, 
              ...realtyAllDbFields(response),
            })        
          })
          .then(() => {
            return dispatch({ 
              type: SET_BTN_UPDATE_REALTY_CLICKED_TRUE, 
              isBtnUpdateRealtyClicked: true 
            })        
          })
          .catch(error => {
            console.log(error)
        })
  }
}

