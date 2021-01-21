import { allRealtyDbFields } from '../script'
import { realtyShowAC } from './ac/realtyShowAC'
import { reduceObjByArray } from '../script'


export const realtyShowAsync = id => 
  async dispatch => {
    try {
      const response = await axios.get(route('realties.show', id))
      return dispatch(realtyShowAC(reduceObjByArray(allRealtyDbFields, response.data)))  
    }
    catch (error) {
      console.log(error)
    }    
  }



// export function realtyShowAsync(id) {
//   return function (dispatch) {
//     axios.get(route('realties.show', id))
//       .then(response => {
//         const realty = {}

//         allRealtyDbFields.forEach(prop => {
//           realty[prop] = response.data[prop]
//         })

//         return dispatch(realtyShowAC(realty))
//       })
//   }
// }