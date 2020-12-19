import { GET_FEEDBACKS } from './consts';

export function getFeedbacks() {
  return function(dispatch) {  
    axios.get(route('feedbacks.index'))  
          .then(response => {   
            return dispatch({ 
              type: GET_FEEDBACKS, 
              feedbacks: response.data.data 
          })          
    })
  }
}

