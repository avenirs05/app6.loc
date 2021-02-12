import { GET_FEEDBACKS } from '../actions/consts'

const feedbacksInit = {
  items: [],
  totalPages: 0,
  totalItems: 0,
  currentPage: 1,
  perPage: 50 
}


export default function feedbacks(state = feedbacksInit, action) {
  switch (action.type) {
    case GET_FEEDBACKS:      
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



