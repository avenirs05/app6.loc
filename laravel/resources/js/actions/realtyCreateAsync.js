import { setJustCreatedResourceTrueAC } from './ac/flagsAC'
import { setAlertCreateVisibilityTrueAC } from './ac/flagsAC'
import { cleanFormDataImagesAC } from './ac/cleanFormDataImagesAC'


export const realtyCreateAsync = (values, formDataImages) => async dispatch => {
  try {
    const response = await axios.post(route('realties.store'), values)
    await formDataImages.set('realtyId', response.data)
    await axios.post(route('realty-create-images-load'), formDataImages)
    await dispatch(setJustCreatedResourceTrueAC())
    await dispatch(setAlertCreateVisibilityTrueAC())
    await dispatch(cleanFormDataImagesAC())
  } 
  catch (error) {
    console.log(error)
  }
}
