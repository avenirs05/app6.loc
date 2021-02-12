import { compose } from 'redux'
import { realtyShowAC } from './ac/realtyShowAC'
import { reduceObjByArray, getPropListFromObjByFlag } from '../script'
import { realtyFields } from '../consts'


export const realtyShowAsync = id => async dispatch => {
  try {
    const response = await axios.get(route('realties.show', id))
    const propList = getPropListFromObjByFlag(realtyFields, 'inShowAction')    
    
    return compose(
      dispatch,
      realtyShowAC,  
      reduceObjByArray,    
    ) (propList, response.data)
  }
  catch (error) {
    console.log(error)
  }    
}