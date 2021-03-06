import { getRealtiesAC } from './ac/getRealtiesAC'


export const getRealtiesAsync = pageNumber => async dispatch => {
  const response = await axios.get(route('realties.index') + `?page=${pageNumber}`)
  return dispatch(getRealtiesAC(response.data))
}