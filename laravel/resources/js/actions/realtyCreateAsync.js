import { setJustCreatedRealtyTrueAC } from './ac/flagsAC'
import { setAlertCreateVisibilityTrueAC } from './ac/flagsAC'
import { cleanFormDataImagesAC } from './ac/cleanFormDataImagesAC'


export const realtyCreateAsync = (values, formDataImages) =>
  async dispatch => {
    try {
      const response = await axios.post(route('realties.store'), values)
      await formDataImages.set('realtyId', response.data)
      await axios.post(route('images.download'), formDataImages)
      await dispatch(setJustCreatedRealtyTrueAC())
      await dispatch(setAlertCreateVisibilityTrueAC())
      dispatch(cleanFormDataImagesAC())
    } 
    catch (error) {
      console.log(error)
    }
  }
