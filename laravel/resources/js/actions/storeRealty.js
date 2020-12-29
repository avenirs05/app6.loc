import { STORE_REALTY } from './consts';

export function storeRealty(id) {
  return function(dispatch) {  
    axios.post(route('realties.index'), {id: id})                   
         .then(response => { 
          console.log(response)
          //return 'hello'
            //     dispatch({ 
            //   type: GET_FEEDBACKS, 
            //   items: response.data.data,
            //   totalPages: response.data.last_page,
            //   currentPage: response.data.current_page,
            //   perPage: response.data.per_page,
            //   totalItems: response.data.total,    
            // })          
    })
  }
}

