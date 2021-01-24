import { realtyEditAsync } from './realtyEditAsync'


export const realtyThumbnailsLoadAsync = formData => 
  async dispatch => {
    try {
      const response = await axios.post(route('realty-thumbnails-load'), formData)    
      //console.log(response);
      
      //await dispatch(realtyEditAsync(formData.get('realtyId')))
    }
    catch (error) {
      console.log(error)
    }
  }