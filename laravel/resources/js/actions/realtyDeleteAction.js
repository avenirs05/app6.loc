import { REALTY_DELETE } from './consts'
import { setAlertVisibilityTrueAction } from './setAlertVisibilityTrueAction'
import { setBtnDeleteRealtyClickedTrueAction } from './setBtnDeleteRealtyClickedTrueAction'


export function realtyDeleteAction(id) {
  return function(dispatch) {  
    axios.delete(route('realties.destroy', id))                   
         .then(() => {            
            return dispatch({ 
              type: REALTY_DELETE, 
              id
            })        
          })
          .then(() => {            
            return dispatch(setBtnDeleteRealtyClickedTrueAction())       
          })
          .then(() => {            
            return dispatch(setAlertVisibilityTrueAction())       
          })
          .catch(error => {
            console.log(error)
          })
  }
}