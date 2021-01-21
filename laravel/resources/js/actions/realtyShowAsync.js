import { allRealtyDbFields } from '../script'
import { realtyShowAC } from './ac/realtyShowAC'
import { reduceObjByArray } from '../script'

export const realtyShowAsync = id => 
  async dispatch => {
    try {
      const response = await axios.get(route('realties.show', id))
      return dispatch(realtyShowAC(reduceObjByArray(allRealtyDbFields, response.data)))  
    }
    catch (error) {
      console.log(error)
    }    
  }