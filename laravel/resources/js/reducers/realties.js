const initialState = {
  items: [],
  totalPages: 0,
  totalItems: 0 
}

export default function realties(state = initialState, action) {
  switch (action.type) {
    case 'ADD_REALTY':
      return [ 
        ...state, 
        action.payload
      ]

    case 'GET_REALTIES':      
      return {
        items: action.items,
        totalPages: action.totalPages,
        totalItems: action.totalItems
      }
      
    default:
      return state  
  }
}



