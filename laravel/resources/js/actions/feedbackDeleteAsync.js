import { setJustDeletedResourceTrueAC } from './ac/flagsAC'
import { setAlertDeleteVisibilityTrueAC } from './ac/flagsAC'
import { feedbackDeleteAC } from './ac/feedbackDeleteAC'


export const feedbackDeleteAsync = id => async dispatch => {
  try {     
    await axios.delete(route('feedbacks.destroy', id))
    await dispatch(feedbackDeleteAC(id))
    await dispatch(setJustDeletedResourceTrueAC())
    await dispatch(setAlertDeleteVisibilityTrueAC())     
  } 
  catch (error) {
    console.log(error)
  }
}
