import { setJustCreatedRealtyTrueAC } from './ac/flagsAC'
import { setAlertCreateVisibilityTrueAC } from './ac/flagsAC'
import { cleanFileListAC } from './ac/cleanFileListAC'


export function realtyCreateAsync(values, fileList) {
  return async function (dispatch) {
    await axios.post(route('realties.store'), values)
      .then(response => { fileList.set('realtyId', response.data) })
      .then(() => dispatch(setJustCreatedRealtyTrueAC()))
      .then(() => dispatch(setAlertCreateVisibilityTrueAC()))
      .catch(error => { console.log(error) })
    axios.post(route('images.download'), fileList)
      .then(() => dispatch(cleanFileListAC()))      
      .catch(error => { console.log(error) })
  }
}