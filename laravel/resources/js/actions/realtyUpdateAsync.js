import { realtyModelFields } from '../script';
import { setJustUpdatedRealtyTrueAC } from './ac/flagsAC'
import { setAlertUpdateVisibilityTrueAC } from './ac/flagsAC'
import { realtyUpdateAC } from './ac/realtyUpdateAC'
import { reduceObjByArray } from '../script'


export const realtyUpdateAsync = values => 
  async dispatch => {
    try {
      const response = await axios.patch(route('realties.update', values.id), values)
      await dispatch(realtyUpdateAC(reduceObjByArray(realtyModelFields, response.data)))    
      await dispatch(setJustUpdatedRealtyTrueAC())
      await dispatch(setAlertUpdateVisibilityTrueAC())
    }
    catch (error) {
      console.log(error)
    }
  }