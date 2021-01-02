import { GET_REALTIES } from './consts';

export function getRealtiesAction(pageNumber) {
  return function(dispatch) {  
    axios.get(route('realties.index') + `?page=${pageNumber}`)                   
         .then(response => {    
            return dispatch({ 
              type: GET_REALTIES, 
              items: response.data.data,
              totalPages: response.data.last_page,
              currentPage: response.data.current_page,
              perPage: response.data.per_page,              
              totalItems: response.data.total,    
            })        
    })
  }
}
