import { setJustCreatedRealtyTrueAC } from './setJustCreatedRealtyTrueAC'
import { setAlertCreateVisibilityTrueAC } from './setAlertCreateVisibilityTrueAC'


export function realtyCreateAsync(values, fileList) {
  return async function (dispatch) {
    await axios.post(route('realties.store'), values)
      .then(response => { fileList.set('realtyId', response.data) })
      .then(() => dispatch(setJustCreatedRealtyTrueAC()))
      .then(() => dispatch(setAlertCreateVisibilityTrueAC()))
      .catch(error => { console.log(error) })
    axios.post(route('images.download'), fileList)
      .catch(error => { console.log(error) })
  }
}