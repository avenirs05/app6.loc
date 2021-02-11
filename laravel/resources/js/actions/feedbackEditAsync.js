import { feedbackFields } from '../consts'
import { getModelFieldsList } from '../script'
import { feedbackEditAC } from './ac/feedbackEditAC'
import { reduceObjByArray } from '../script'


export const feedbackEditAsync = id => async dispatch => {
  try {
    const response = await axios.get(route('feedbacks.edit', id))      
    const feedbackModelFieldsList = getModelFieldsList(feedbackFields)
    // console.log(feedbackModelFieldsList)
    // console.log(response.data)
    const responseData = reduceObjByArray(feedbackModelFieldsList, response.data)       
    return dispatch(feedbackEditAC({...responseData, realty_name: responseData.realty.name})) 
  }
  catch (error) {
    console.log(error)
  }
}