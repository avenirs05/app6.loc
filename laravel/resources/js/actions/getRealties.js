import { GET_REALTIES } from './consts';

export function getRealties() {
  return function(dispatch) {  
    axios.get(route('realties.index'))                   
         .then(response => {    
            return dispatch({ 
              type: GET_REALTIES, 
              items: response.data.data,
              totalPages: response.data.last_page,
              totalItems: response.data.total     
            })          
    })
  }
}

