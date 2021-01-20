import { GET_FILE_LIST } from '../actions/consts';
import { CLEAN_FILE_LIST } from '../actions/consts';


export default function fileList(state = new FormData(), action) {
  switch (action.type) {
    case GET_FILE_LIST:      
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
    
    case CLEAN_FILE_LIST:
      return new FormData()
    
    default:
      return state  
  }
}



