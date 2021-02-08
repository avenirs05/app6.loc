import { realtyShowAC } from './ac/realtyShowAC'
import { reduceObjByArray } from '../script'
import { realtyFields } from '../consts'
import { getModelFieldsList } from '../script'


export const realtyShowAsync = id => async dispatch => {
  try {
    const response = await axios.get(route('realties.show', id))
    const realtyModelFieldsList = getModelFieldsList(realtyFields)
    const responseData = reduceObjByArray(realtyModelFieldsList, response.data)   
    return dispatch(realtyShowAC(responseData))  
  }
  catch (error) {
    console.log(error)
  }    
}