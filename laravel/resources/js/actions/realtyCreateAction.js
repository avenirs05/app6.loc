import { REALTY_CREATE } from './consts';
import { allRealtyDbFields } from '../script';
import { setJustCreatedRealtyTrueAction } from './setJustCreatedRealtyTrueAction'
import { setAlertCreateVisibilityTrueAction } from './setAlertCreateVisibilityTrueAction'


export function realtyCreateAction(values) {
  return function(dispatch) {  
    //console.log('done1')
    axios.post(route('realties.store'), values) 
         .then(response => { 
           console.log(response.data)
            // const realty = {}

            // allRealtyDbFields.forEach(prop => { 
            //   realty[prop] = response.data[prop] 
            // }) 

            // return dispatch({ 
            //   type: REALTY_CREATE, 
            //   ...realty,
            // })        
          })
          // .then(() => {
          //   return dispatch(setJustCreatedRealtyTrueAction())        
          // })
          // .then(() => {
          //   return dispatch(setAlertCreateVisibilityTrueAction())        
          // })
          .catch(error => {
            console.log(error)
          })
  }
}

