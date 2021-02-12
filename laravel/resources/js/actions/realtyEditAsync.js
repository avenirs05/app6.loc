import { realtyEditAC } from './ac/realtyEditAC'

export const realtyEditAsync = id => async dispatch => {
  try {
    const response = await axios.get(route('realties.edit', id))
    dispatch(realtyEditAC(response.data)) 
  }
  catch (error) {
    console.log(error)
  }
}