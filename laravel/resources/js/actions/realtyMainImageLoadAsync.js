import { realtyEditAsync } from './realtyEditAsync'
import { cleanFormDataImagesAC } from './ac/cleanFormDataImagesAC'


export const realtyMainImageLoadAsync = formData => 
  async dispatch => {
    try {
      await axios.post(route('realty-main-image-load'), formData)    
      await dispatch(realtyEditAsync(formData.get('realtyId')))
      await dispatch(cleanFormDataImagesAC())
    }
    catch (error) {
      console.log(error)
    }
  }