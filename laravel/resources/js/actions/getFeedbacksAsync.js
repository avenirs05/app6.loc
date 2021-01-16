import { getFeedbacksAC } from './getFeedbacksAC'


export const getFeedbacksAsync = pageNumber => {
  return async dispatch => {
    const response = await axios.get(route('feedbacks.index') + `?page=${pageNumber}`)
    return dispatch(getFeedbacksAC(response.data))
  }
}