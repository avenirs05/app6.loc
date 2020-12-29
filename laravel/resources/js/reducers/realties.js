import { realties as realtiesInit } from './initialState';
import { GET_REALTIES } from '../actions/consts';

export default function realties(state = realtiesInit, action) {
  switch (action.type) {
    case GET_REALTIES:      
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



