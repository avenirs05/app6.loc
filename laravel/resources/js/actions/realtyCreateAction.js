import { setJustCreatedRealtyTrueAction } from './setJustCreatedRealtyTrueAction'
import { setAlertCreateVisibilityTrueAction } from './setAlertCreateVisibilityTrueAction'


export function realtyCreateAction(values, fileList) {
  let formData = new FormData()

  for (let key in values) {
    formData.set(key, values[key])
  }

  return async function (dispatch) {
    await axios.post(route('realties.store'), formData)
      .then(response => { fileList.set('realtyId', response.data) })
      .then(() => dispatch(setJustCreatedRealtyTrueAction()))
      .then(() => dispatch(setAlertCreateVisibilityTrueAction()))
      .catch(error => { console.log(error) })
    axios.post(route('test'), fileList)
      .catch(error => { console.log(error) })
  }
}