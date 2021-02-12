import { realtyShowAC } from './ac/realtyShowAC'


export const realtyShowAsync = id => async dispatch => {
  try {     
    const response = await axios.get(route('realties.show', id))
    return dispatch(realtyShowAC(response.data)) 
  }
  catch (error) {
    console.log(error)
  }    
}