//import { setJustUpdatedResourceTrueAC } from './ac/flagsAC'
//import { setAlertUpdateVisibilityTrueAC } from './ac/flagsAC'


export const contentUpdateAsync = values => async dispatch => {
  try {   
    const response = await axios.patch(route('content.update'), values)        
    console.log(response.data)  
    //await dispatch(setJustUpdatedResourceTrueAC())
    //await dispatch(setAlertUpdateVisibilityTrueAC())
  }
  catch (error) {
    console.log(error)
  }
}