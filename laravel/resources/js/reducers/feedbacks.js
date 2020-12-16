const initialState = []

export default function feedbacks(state = initialState, action) {
  switch (action.type) {
    case 'GET_FEEDBACKS':
      return action.feedbacks      
    default:
      return state  
  }
}



