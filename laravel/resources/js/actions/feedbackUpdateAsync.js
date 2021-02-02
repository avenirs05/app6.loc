import { feedbackFields } from '../consts'
import { getModelFieldsList } from '../script'
import { setJustUpdatedFeedbackTrueAC } from './ac/flagsAC'
import { setAlertUpdateVisibilityTrueAC } from './ac/flagsAC'
import { feedbackUpdateAC } from './ac/feedbackUpdateAC'
import { reduceObjByArray } from '../script'


export const feedbackUpdateAsync = values => 
  async dispatch => {
    try {   
      const response = await axios.patch(route('feedbacks.update', values.id), values)     
      const feedbackModelFieldsList = getModelFieldsList(feedbackFields)
      const responseData = reduceObjByArray(feedbackModelFieldsList, response.data)  
      await dispatch(feedbackUpdateAC(responseData))    
      await dispatch(setJustUpdatedFeedbackTrueAC())
      await dispatch(setAlertUpdateVisibilityTrueAC())
    }
    catch (error) {
      console.log(error)
    }
  }