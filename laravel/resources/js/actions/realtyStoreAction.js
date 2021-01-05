import { REALTY_STORE } from './consts';
import { allRealtyDbFields } from '../script';
import { SET_BTN_UPDATE_REALTY_CLICKED_TRUE } from './consts';

export function realtyStoreAction(values) {
  return function(dispatch) {  
    //console.log(values);
    // We have to delete type field because type here is type of action ("REALTY_EDIT" etc.) 
    delete values.type    
    axios.post(route('realties.store'), {...values}) 
         .then(response => { 
            const obj = {}
            allRealtyDbFields.forEach(prop => { 
              obj[prop] = response.data[prop] 
            }) 

            return dispatch({ 
              type: REALTY_STORE, 
              ...obj,
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

