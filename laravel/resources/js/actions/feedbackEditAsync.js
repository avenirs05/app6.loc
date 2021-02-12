import { feedbackEditAC } from './ac/feedbackEditAC'


export const feedbackEditAsync = id => async dispatch => {
  try {
    const response = await axios.get(route('feedbacks.edit', id))      
    return dispatch(feedbackEditAC({...response.data, realty_name: response.data.realty.name })) 
  }
  catch (error) {
    console.log(error)
  }
}