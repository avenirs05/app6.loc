import { getFeedbacksAC } from './ac/getFeedbacksAC'


export const getFeedbacksSearchedAsync = input => async dispatch => {
  const response = await axios.post(route('feedbacks.search'), {input})
  return dispatch(getFeedbacksAC(response.data))
}
