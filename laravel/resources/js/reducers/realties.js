import { GET_REALTIES } from '../actions/consts'

const realtiesInit = {
  items: [],
  totalPages: 0,
  totalItems: 0,
  currentPage: 1,
  perPage: 20 
}

export default function realties(state = realtiesInit, action) {
  switch (action.type) {
    case GET_REALTIES:      
      return {
        items: action.payload.items,
        totalPages: action.payload.totalPages,
        totalItems: action.payload.totalItems,
        currentPage: action.payload.currentPage,
        perPage: action.payload.perPage,
      }
      
    default:
      return state  
  }
}