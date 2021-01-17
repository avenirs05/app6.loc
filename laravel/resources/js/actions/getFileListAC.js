import { GET_FILE_LIST } from './consts';

export function getFileListAC(payload, imgType) {    
  return { 
    type: GET_FILE_LIST, 
    payload,
    imgType
  }   
}

