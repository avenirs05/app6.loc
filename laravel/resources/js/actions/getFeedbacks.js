import { GET_FEEDBACKS } from './consts';

export function getFeedbacks(pageNumber) {
  return function(dispatch) {  
    axios.get(route('feedbacks.index') + `?page=${pageNumber}`)                   
         .then(response => {    
            return dispatch({ 
              type: GET_FEEDBACKS, 
              items: response.data.data,
              totalPages: response.data.last_page,
              currentPage: response.data.current_page,
              perPage: response.data.per_page,
              totalItems: response.data.total,    
            })          
    })
  }
}

