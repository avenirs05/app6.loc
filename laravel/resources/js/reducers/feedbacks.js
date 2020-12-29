import { feedbacks as feedbacksInit } from './initialState';

export default function feedbacks(state = feedbacksInit, action) {
  switch (action.type) {
    case 'GET_FEEDBACKS':      
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



