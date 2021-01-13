import { GET_FILE_LIST } from '../actions/consts';


export default function fileList(state = new FormData(), action) {
  switch (action.type) {
    case GET_FILE_LIST:      
      let formData = new FormData()
      let images = action.payload
      for (let key in images) {
        formData.append('images[]', images[key])
      }
      
      //formData.append('image', images[0])
      // for (let key in images) {
      //   formData.append('images', images[key])
      // }


      
      return formData      
      
    default:
      return state  
  }
}



