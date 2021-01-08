import { REALTY_DELETE } from './consts'
import { setJustDeletedRealtyTrueAction } from './setJustDeletedRealtyTrueAction'
import { setAlertDeleteVisibilityTrueAction } from './setAlertDeleteVisibilityTrueAction'


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
            return dispatch(setJustDeletedRealtyTrueAction())        
          })
          .then(() => {            
            return dispatch(setAlertDeleteVisibilityTrueAction())       
          })
          .catch(error => {
            console.log(error)
          })
  }
}