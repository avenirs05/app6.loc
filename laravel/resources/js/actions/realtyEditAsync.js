import { realtyFields } from '../consts'
import { getModelFieldsList } from '../script'
import { realtyEditAC } from './ac/realtyEditAC'
import { reduceObjByArray } from '../script'


export const realtyEditAsync = id => async dispatch => {
  try {
    const response = await axios.get(route('realties.edit', id))
    const realtyModelFieldsList = getModelFieldsList(realtyFields)
    const responseData = reduceObjByArray(realtyModelFieldsList, response.data)  
    return dispatch(realtyEditAC(responseData)) 
  }
  catch (error) {
    console.log(error)
  }
}