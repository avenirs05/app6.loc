import { realtyModelFields } from '../script';
import { setJustUpdatedRealtyTrueAC } from './ac/flagsAC'
import { setAlertUpdateVisibilityTrueAC } from './ac/flagsAC'
import { realtyUpdateAC } from './ac/realtyUpdateAC'
// import { getFormDataImagesAC } from './ac/getFormDataImagesAC'
import { reduceObjByArray } from '../script'
import { cleanFormDataImagesAC } from './ac/cleanFormDataImagesAC'


export const realtyUpdateAsync = values => 
  async dispatch => {
    try {
      const response = await axios.patch(route('realties.update', values.id), values)
      await dispatch(realtyUpdateAC(reduceObjByArray(realtyModelFields, response.data)))
      // await formDataImages.set('realtyId', values.id)
      // await axios.post(route('images.download'), formDataImages)      
      await dispatch(cleanFormDataImagesAC())
      await dispatch(setJustUpdatedRealtyTrueAC())
      await dispatch(setAlertUpdateVisibilityTrueAC())
    }
    catch (error) {
      console.log(error)
    }
  }