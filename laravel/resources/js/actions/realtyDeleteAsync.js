import { setJustDeletedResourceTrueAC } from './ac/flagsAC'
import { setAlertDeleteVisibilityTrueAC } from './ac/flagsAC'
import { realtyDeleteAC } from './ac/realtyDeleteAC'


export const realtyDeleteAsync = id => 
  async dispatch => {
    try {
      await axios.delete(route('realties.destroy', id))
      await dispatch(realtyDeleteAC(id))
      await dispatch(setJustDeletedResourceTrueAC())
      dispatch(setAlertDeleteVisibilityTrueAC())
    } catch (error) {
      console.log(error)
    }
  }
