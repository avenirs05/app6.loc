const initialState = []

export default function realties(state = initialState, action) {
  switch (action.type) {
    case 'ADD_REALTY':
      return [ 
        ...state, 
        action.payload
      ]

    case 'GET_REALTIES':
      return action.realties 
      
    default:
      return state  
  }
}



