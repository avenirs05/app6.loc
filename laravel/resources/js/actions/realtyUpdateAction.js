import { REALTY_UPDATE } from './consts';
import { allRealtyDbFields } from '../script';
import { setBtnUpdateRealtyClickedTrueAction } from './setBtnUpdateRealtyClickedTrueAction'

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
            return dispatch(setBtnUpdateRealtyClickedTrueAction())        
          })
          .catch(error => {
            console.log(error)
          })
  }
}

