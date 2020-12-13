export function getRealties() {
  return function(dispatch) {  
    axios.get(`/admin/realties`)
         .then(response => {
            console.log(response.data)
            
            return dispatch({ 
              type: 'GET_REALTIES', 
              payload: response.data 
          })
    })
  }
}

