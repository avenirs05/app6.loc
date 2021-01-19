import { allRealtyDbFields } from '../script'
import { realtyEditAC } from './ac/realtyEditAC'

export function realtyEditAsync(id) {
  return function (dispatch) {
    axios.get(route('realties.edit', id))
      .then(response => { 
        const realty = {}

        allRealtyDbFields.forEach(prop => {
          realty[prop] = response.data[prop]      
        })

        return dispatch(realtyEditAC(realty))
      })
  }
}