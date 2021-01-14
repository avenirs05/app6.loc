import { GET_FILE_LIST } from './consts';

export function getFileListAction(payload) {              
  return { 
    type: GET_FILE_LIST, 
    payload: payload
  }   
}

