const initialState = {
  items: [],
  totalPages: 0,
  totalItems: 0,
  currentPage: 1,
  perPage: 4 
}

export default function realties(state = initialState, action) {
  switch (action.type) {
    case 'GET_REALTIES':      
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



