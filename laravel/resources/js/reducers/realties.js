const initialState = []

export default function realties(state = initialState, action) {
  switch (action.type) {
    case 'ADD_REALTY':
      return [ 
        ...state, 
        action.payload
      ]

    case 'GET_REALTIES':
      console.log(action.realties)

      return action.realties 
      //   {
      //   realties: action.payload,
      //   isActive: true
      // } 
      //action.payload
      // return {
      //   ...state, 
      //   realties: [...state.realties, action.payload]
      // } 
      
    default:
      return state  
  }
}



