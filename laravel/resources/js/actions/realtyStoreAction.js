import { REALTY_STORE } from './consts';
import { allRealtyDbFields } from '../script';
import { SET_BTN_UPDATE_REALTY_CLICKED_TRUE } from './consts';

// export function realtyStoreAction(values) {
//   return function(dispatch) {  
//     axios.post(route('realties.store'), {...values}) 
//          .then(response => { 
//             const realty = {}
//             allRealtyDbFields.forEach(prop => { 
//               realty[prop] = response.data[prop] 
//             }) 

//             return dispatch({ 
//               type: REALTY_STORE, 
//               ...realty,
//             })        
//           })
//           .then(() => {
//             return dispatch({ 
//               type: SET_BTN_UPDATE_REALTY_CLICKED_TRUE, 
//               isBtnUpdateRealtyClicked: true 
//             })        
//           })
//           .catch(error => {
//             console.log(error)
//         })
//   }
// }

export function realtyStoreAction(values) {
  return function(dispatch) {  
    axios.patch(route('realties.update', values.id), {...values}) 
         .then(response => { 
            const realty = {}
            allRealtyDbFields.forEach(prop => { 
              realty[prop] = response.data[prop] 
            }) 

            return dispatch({ 
              type: REALTY_STORE, 
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

