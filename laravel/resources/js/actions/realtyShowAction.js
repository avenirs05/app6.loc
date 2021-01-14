import { REALTY_SHOW } from './consts';
import { allRealtyDbFields } from '../script';

export function realtyShowAction(id) {
  return function (dispatch) {
    axios.get(route('realties.show', id))
      .then(response => {
        const obj = {}
        allRealtyDbFields.forEach(prop => {
          obj[prop] = response.data[prop]
        })

        return dispatch({
          type: REALTY_SHOW,
          ...obj
        })
      })
  }
}
