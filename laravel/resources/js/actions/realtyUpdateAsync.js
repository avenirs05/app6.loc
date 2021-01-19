import { allRealtyDbFields } from '../script';
import { setJustUpdatedRealtyTrueAC } from './ac/flagsAC'
import { setAlertUpdateVisibilityTrueAC } from './ac/flagsAC'
import { realtyUpdateAC } from './ac/realtyUpdateAC'


export function realtyUpdateAsync(values, fileList) {
  return async function (dispatch) {
    await axios.patch(route('realties.update', values.id), values)
      .then(response => {
        console.log(response)
        const realty = {}

        allRealtyDbFields.forEach(prop => {
          realty[prop] = response.data[prop]
        })

        return realtyUpdateAC(realty)
      })
      .then(() => { fileList.set('realtyId', values.id) })
      .then(() => dispatch(setJustUpdatedRealtyTrueAC()))
      .then(() => dispatch(setAlertUpdateVisibilityTrueAC()))
      .catch(error => { console.log(error) })
    axios.post(route('images.download'), fileList)
      .catch(error => { console.log(error) })
  }
}

