import { realtyEditAsync } from './realtyEditAsync'


export const loadMainImageAsync = formData => 
  async dispatch => {
    try {
      await axios.post(route('realty-main-image-load'), formData)    
      await dispatch(realtyEditAsync(formData.get('realtyId')))
    }
    catch (error) {
      console.log(error)
    }
  }