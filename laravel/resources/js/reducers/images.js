const initialState = {
  items: [],
  totalPages: 0,
  totalItems: 0,
  currentPage: 1,
  perPage: 100 
}

export default function images(state = initialState, action) {
  switch (action.type) {
    case 'GET_IMAGES':      
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



