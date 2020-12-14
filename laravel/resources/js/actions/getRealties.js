export function getRealties() {
  return function(dispatch) {  
    axios.get(`/admin/realties`)
         .then(response => {           
            return dispatch({ 
              type: 'GET_REALTIES', 
              payload: response.data.data 
          })          
    })
  }
}

