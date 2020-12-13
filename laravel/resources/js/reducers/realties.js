const initialState = [

]

export default function realties(state = initialState, action) {
  switch (action.type) {
    case 'ADD_REALTY':
      return [ 
        ...state, 
        action.payload
      ]

    case 'GET_REALTIES':
      //console.log(action.payload[0].title)
      return action.payload
      // return {
      //   ...state, 
      //   realties: [...state.realties, action.payload]
      // } 
      
    default:
      return state  
  }
}



