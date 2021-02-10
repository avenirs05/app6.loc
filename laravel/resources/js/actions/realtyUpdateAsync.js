import { setJustUpdatedResourceTrueAC } from './ac/flagsAC'
import { setAlertUpdateVisibilityTrueAC } from './ac/flagsAC'


export const realtyUpdateAsync = values => async dispatch => {
  try {
    await axios.patch(route('realties.update', values.id), values)  
    await dispatch(setJustUpdatedResourceTrueAC())
    await dispatch(setAlertUpdateVisibilityTrueAC())
  }
  catch (error) {
    console.log(error)
  }
}