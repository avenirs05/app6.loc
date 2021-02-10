import { setJustUpdatedFeedbackTrueAC } from './ac/flagsAC'
import { setAlertUpdateVisibilityTrueAC } from './ac/flagsAC'


export const feedbackUpdateAsync = values => async dispatch => {
    try {   
      await axios.patch(route('feedbacks.update', values.id), values)          
      await dispatch(setJustUpdatedFeedbackTrueAC())
      await dispatch(setAlertUpdateVisibilityTrueAC())
    }
    catch (error) {
      console.log(error)
    }
  }