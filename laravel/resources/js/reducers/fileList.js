import { GET_FILE_LIST } from '../actions/consts';


export default function fileList(state = new FormData(), action) {
  switch (action.type) {
    case GET_FILE_LIST:      
      let formData = state
      let images = action.payload
      
      if (action.imgType === 'thumbnail') {
        for (let key in action.payload) {
          formData.append('images[]', images[key])          
        }
      }

      if (action.imgType === 'main') {
        formData.set('main_image', images[0])      
      }
      
    return formData      
      
    default:
      return state  
  }
}



