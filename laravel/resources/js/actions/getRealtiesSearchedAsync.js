import { getRealtiesAC } from './ac/getRealtiesAC'


export const getRealtiesSearchedAsync = input => async dispatch => {
  const response = await axios.post(route('realties.search'), {input})
  return dispatch(getRealtiesAC(response.data))
}
