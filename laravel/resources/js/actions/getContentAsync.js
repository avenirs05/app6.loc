import { getContentAC } from './ac/getContentAC'


export const getContentAsync = () => async dispatch => {
  const response = await axios.get(route('content.get')) 
  return dispatch(getContentAC(response.data))
}