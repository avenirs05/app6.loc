import { realtyModelFields } from '../script';
import { setJustUpdatedRealtyTrueAC } from './ac/flagsAC'
import { setAlertUpdateVisibilityTrueAC } from './ac/flagsAC'
import { realtyUpdateAC } from './ac/realtyUpdateAC'
import { getFormDataImagesAC } from './ac/getFormDataImagesAC'
import { reduceObjByArray } from '../script'


export const realtyUpdateAsync = (values, formDataImages) => 
  async dispatch => {
    try {
      const response = await axios.patch(route('realties.update', values.id), values)
      await dispatch(realtyUpdateAC(reduceObjByArray(realtyModelFields, response.data)))
      await formDataImages.set('realtyId', values.id)
      await axios.post(route('images.download'), formDataImages)      
      await dispatch(getFormDataImagesAC(new FormData()))
      await dispatch(setJustUpdatedRealtyTrueAC())
      await dispatch(setAlertUpdateVisibilityTrueAC())
    }
    catch (error) {
      console.log(error)
    }
  }