export function getRealties() {
  return function(dispatch) {  
    fetch('https://jsonplaceholder.typicode.com/todos/3')
      .then(response => response.json())
      .then(json => {
        console.log(json)
        return dispatch({ type: 'GET_REALTIES', payload: json })
      })
  }
}

