import { REALTY_UPDATE } from './consts';
import { allRealtyDbFields } from '../script';
import { setJustUpdatedRealtyTrueAC } from './setJustUpdatedRealtyTrueAC'
import { setAlertUpdateVisibilityTrueAC } from './setAlertUpdateVisibilityTrueAC'


export function realtyUpdateAction(values, fileList) {
  return async function (dispatch) {
    await axios.patch(route('realties.update', values.id), values)
      .then(response => {
        const realty = {}

        allRealtyDbFields.forEach(prop => {
          realty[prop] = response.data[prop]
        })

        return dispatch({
          type: REALTY_UPDATE,
          ...realty,
        })
      })
      .then(() => { fileList.set('realtyId', values.id) })
      .then(() => dispatch(setJustUpdatedRealtyTrueAC()))
      .then(() => dispatch(setAlertUpdateVisibilityTrueAC()))
      .catch(error => { console.log(error) })
    axios.post(route('images.download'), fileList)
      .catch(error => { console.log(error) })
  }
}

