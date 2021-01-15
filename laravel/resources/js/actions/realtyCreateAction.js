import { setJustCreatedRealtyTrueAction } from './setJustCreatedRealtyTrueAction'
import { setAlertCreateVisibilityTrueAction } from './setAlertCreateVisibilityTrueAction'


export function realtyCreateAction(values, fileList) {
  return async function (dispatch) {
    await axios.post(route('realties.store'), values)
      .then(response => { fileList.set('realtyId', response.data) })
      .then(() => dispatch(setJustCreatedRealtyTrueAction()))
      .then(() => dispatch(setAlertCreateVisibilityTrueAction()))
      .catch(error => { console.log(error) })
    axios.post(route('images.download'), fileList)
      .catch(error => { console.log(error) })
  }
}