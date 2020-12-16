import { GET_REALTIES } from './consts';

export function getRealties() {
  return function(dispatch) {  
    axios.get(route('realties.index'))
         .then(response => {           
            return dispatch({ 
              type: GET_REALTIES, 
              realties: response.data.data 
          })          
    })
  }
}

