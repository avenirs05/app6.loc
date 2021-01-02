import { images as imagesInit } from './initialState';
import { GET_IMAGES } from '../actions/consts';


export default function images(state = imagesInit, action) {
  switch (action.type) {
    case GET_IMAGES:      
      return {
        items: action.items,
        totalPages: action.totalPages,
        totalItems: action.totalItems,
        currentPage: action.currentPage,
        perPage: action.perPage,
      }
      
    default:
      return state  
  }
}



