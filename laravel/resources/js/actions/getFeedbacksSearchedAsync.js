import { getFeedbacksAC } from './ac/getFeedbacksAC'


export const getFeedbacksSearchedAsync = input => {
  return async dispatch => {
    const response = await axios.post(route('feedbacks.search'), {input})
    const filtered = response.data.data.filter(item => item['realty'] ? true : false)
    response.data.data = filtered;   
    
    return dispatch(getFeedbacksAC(response.data))
  }
}