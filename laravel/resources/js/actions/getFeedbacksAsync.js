import { getFeedbacksAC } from './ac/getFeedbacksAC'


export const getFeedbacksAsync = pageNumber => async dispatch => {
  const response = await axios.get(route('feedbacks.index') + `?page=${pageNumber}`)   
  return dispatch(getFeedbacksAC(response.data))
}