import { feedbackShowAC } from './ac/feedbackShowAC'
import { reduceObjByArray } from '../script'
import { feedbackFields } from '../consts'
import { getModelFieldsList } from '../script'


export const feedbackShowAsync = id => async dispatch => {
  try {     
    const response = await axios.get(route('feedbacks.show', id))    
    const feedbackModelFieldsList = getModelFieldsList(feedbackFields)
    const responseData = reduceObjByArray(feedbackModelFieldsList, response.data)  
    return dispatch(feedbackShowAC(responseData))  
  }
  catch (error) {
    console.log(error)
  }    
}