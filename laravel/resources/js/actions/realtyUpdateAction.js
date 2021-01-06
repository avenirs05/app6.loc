import { REALTY_UPDATE } from './consts';
import { allRealtyDbFields } from '../script';
import { SET_BTN_UPDATE_REALTY_CLICKED_TRUE } from './consts';

export function realtyUpdateAction(values) {
  return function(dispatch) {  
    axios.patch(route('realties.update', values.id), {...values}) 
         .then(response => { 
            const realty = {}
            allRealtyDbFields.forEach(prop => { 
              realty[prop] = response.data[prop] 
            }) 

            return dispatch({ 
              type: REALTY_UPDATE, 
              ...realty,
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

