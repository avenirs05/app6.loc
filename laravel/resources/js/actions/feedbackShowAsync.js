import { feedbackShowAC } from './ac/feedbackShowAC'


export const feedbackShowAsync = id => async dispatch => {
  try {     
    const response = await axios.get(route('feedbacks.show', id))     
    return dispatch(feedbackShowAC(response.data))
  }
  catch (error) {
    console.log(error)
  }    
}