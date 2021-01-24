import { GET_FORM_DATA_IMAGES } from '../consts';

export function getFormDataImagesAC(files, imgType) {    
  return { 
    type: GET_FORM_DATA_IMAGES, 
    files,
    imgType
  }   
}

