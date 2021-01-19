import { allRealtyDbFields } from '../script'
import { realtyShowAC } from './ac/realtyShowAC'

export function realtyShowAsync(id) {
  return function (dispatch) {
    axios.get(route('realties.show', id))
      .then(response => {
        const realty = {}

        allRealtyDbFields.forEach(prop => {
          realty[prop] = response.data[prop]
        })

        return dispatch(realtyShowAC(realty))
      })
  }
}