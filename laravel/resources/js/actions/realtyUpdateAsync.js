import { allRealtyDbFields } from '../script';
import { setJustUpdatedRealtyTrueAC } from './ac/flagsAC'
import { setAlertUpdateVisibilityTrueAC } from './ac/flagsAC'
import { realtyUpdateAC } from './ac/realtyUpdateAC'
import { getFormDataImagesAC } from './ac/getFormDataImagesAC'
import { reduceObjByArray } from '../script'


export const realtyUpdateAsync = (values, formDataImages) => 
  async dispatch => {
    try {
      const response = await axios.patch(route('realties.update', values.id), values)
      await dispatch(realtyUpdateAC(reduceObjByArray(allRealtyDbFields, response.data)))
      await formDataImages.set('realtyId', values.id)
      await dispatch(setJustUpdatedRealtyTrueAC())
      await dispatch(setAlertUpdateVisibilityTrueAC())
      await axios.post(route('images.download'), formDataImages)
      dispatch(getFormDataImagesAC(new FormData()))
    }
    catch (error) {
      console.log(error)
    }
  }