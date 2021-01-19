import { setJustDeletedRealtyTrueAC } from './ac/flagsAC'
import { setAlertDeleteVisibilityTrueAC } from './ac/flagsAC'
import { realtyDeleteAC } from './ac/realtyDeleteAC'

export function realtyDeleteAsync(id) {
  return function (dispatch) {
    axios.delete(route('realties.destroy', id))
      .then(() => dispatch(realtyDeleteAC(id)))
      .then(() => dispatch(setJustDeletedRealtyTrueAC()))
      .then(() => dispatch(setAlertDeleteVisibilityTrueAC()))
      .catch(error => { console.log(error) })
  }
}