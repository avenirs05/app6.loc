import { CREATE_FORM_DATA_IMAGES } from '../actions/consts';
import { CLEAN_FORM_DATA_IMAGES } from '../actions/consts';


export default function formDataImages(state = new FormData(), action) {
  switch (action.type) {
    case CREATE_FORM_DATA_IMAGES: 
      
      let formData = state
      let images = action.payload   

      if (action.imgType === 'main_image_create') {
        formData.set('main_image', images[0])      
      }

      if (action.imgType === 'thumbnails_create') {
        for (let key in action.payload) {
          formData.append('thumbnails[]', images[key])          
        }
      }
      
      return formData      
    
    case CLEAN_FORM_DATA_IMAGES:
      return new FormData()
    
    default:
      return state  
  }
}



