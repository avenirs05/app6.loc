import { GET_FORM_DATA_IMAGES } from '../consts';

export function getFormDataImagesAC(payload, imgType) {    
  return { 
    type: GET_FORM_DATA_IMAGES, 
    payload,
    imgType
  }   
}

