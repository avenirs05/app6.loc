import { GET_IMAGES } from './consts';

export function getImages(pageNumber) {
  return function(dispatch) {    
    axios.get(route('images.index') + `?page=${pageNumber}`)                   
         .then(response => {    
            return dispatch({ 
              type: GET_IMAGES, 
              items: response.data.data,
              totalPages: response.data.last_page,
              currentPage: response.data.current_page,
              perPage: response.data.per_page,
              totalItems: response.data.total,    
            })          
    })
  }
}

