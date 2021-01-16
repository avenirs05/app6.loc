import { REALTY_DELETE } from './consts'
import { setJustDeletedRealtyTrueAC } from './setJustDeletedRealtyTrueAC'
import { setAlertDeleteVisibilityTrueAC } from './setAlertDeleteVisibilityTrueAC'


export function realtyDeleteAction(id) {
  return function (dispatch) {
    axios.delete(route('realties.destroy', id))
      .then(() => {
        return dispatch({
          type: REALTY_DELETE,
          id
        })
      })
      .then(() => dispatch(setJustDeletedRealtyTrueAC()))
      .then(() => dispatch(setAlertDeleteVisibilityTrueAC()))
      .catch(error => { console.log(error) })
  }
}