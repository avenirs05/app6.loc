const initialState = {
  items: [],
  totalPages: 0,
  totalItems: 0,
  currentPage: 1 
}

export default function feedbacks(state = initialState, action) {
  switch (action.type) {
    case 'GET_FEEDBACKS':      
      return {
        items: action.items,
        totalPages: action.totalPages,
        totalItems: action.totalItems,
        currentPage: action.currentPage,
      }
      
    default:
      return state  
  }
}



