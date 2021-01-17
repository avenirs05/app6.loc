import { setJustDeletedRealtyTrueAC } from './setJustDeletedRealtyTrueAC'
import { setAlertDeleteVisibilityTrueAC } from './setAlertDeleteVisibilityTrueAC'
import { realtyDeleteAC } from './realtyDeleteAC'

export function realtyDeleteAsync(id) {
  return function (dispatch) {
    axios.delete(route('realties.destroy', id))
      .then(() => dispatch(realtyDeleteAC(id)))
      .then(() => dispatch(setJustDeletedRealtyTrueAC()))
      .then(() => dispatch(setAlertDeleteVisibilityTrueAC()))
      .catch(error => { console.log(error) })
  }
}