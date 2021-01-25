import { realtyEditAsync } from './realtyEditAsync'
import { cleanFormDataImagesAC } from './ac/cleanFormDataImagesAC'


export const realtyThumbnailsLoadAsync = formData => 
  async dispatch => {
    try {
      await axios.post(route('realty-thumbnails-load'), formData)   
      await dispatch(realtyEditAsync(formData.get('realtyId')))
      await dispatch(cleanFormDataImagesAC()) 
    }
    catch (error) {
      console.log(error)
    }
  }