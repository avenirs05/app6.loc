import { CREATE_FORM_DATA_IMAGES } from '../consts';

export function createFormDataImagesAC(payload, imgType) {    
  return { 
    type: CREATE_FORM_DATA_IMAGES, 
    payload,
    imgType
  }   
}

