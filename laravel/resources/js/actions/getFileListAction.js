import { GET_FILE_LIST } from './consts';

export function getFileListAction(payload, imgType) {    
  return { 
    type: GET_FILE_LIST, 
    imgType,
    payload
  }   
}

