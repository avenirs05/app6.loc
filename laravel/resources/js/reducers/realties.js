const initialState = [
  'My home playlist',
  'My work playlist'
]

export default function realties(state = initialState, action) {
  switch (action.type) {
    case 'ADD_REALTY':
      return [ 
        ...state, 
        action.payload
      ]

    case 'GET_REALTIES':
      return [ 
        ...state, 
        action.payload
      ]
    
    default:
      return state  
  }
}



