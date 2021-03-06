import { setJustCreatedResourceTrueAC } from './ac/flagsAC'
import { setAlertCreateVisibilityTrueAC } from './ac/flagsAC'


export const feedbackCreateAsync = values => async dispatch => {
  try {   
    await axios.post(route('feedbacks.store'), values)
    await dispatch(setJustCreatedResourceTrueAC())
    await dispatch(setAlertCreateVisibilityTrueAC())
  } 
  catch (error) {
    console.log(error)
  }
}
