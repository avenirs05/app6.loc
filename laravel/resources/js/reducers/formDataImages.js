import { GET_FORM_DATA_IMAGES } from '../actions/consts';
import { CLEAN_FORM_DATA_IMAGES } from '../actions/consts';


export default function formDataImages(state = new FormData(), action) {
  switch (action.type) {
    case GET_FORM_DATA_IMAGES:    
      //console.log(action.payload);
        
      let formData = state
      let images = action.payload   

      if (action.imgType === 'main_image') {
        formData.set('main_image', images[0])      
      }

      if (action.imgType === 'thumbnails') {
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



