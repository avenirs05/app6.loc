import { setJustUpdatedResourceTrueAC } from './ac/flagsAC'


export const contentUpdateAsync = values => async dispatch => {
  try {   
    const response = await axios.patch(route('content.update'), values)  

    if (response.data === 'success') {
      dispatch(setJustUpdatedResourceTrueAC())
    }      
  }
  catch (error) {
    console.log(error)
  }
}