import { realtyFields } from '../consts'
import { getModelFieldsList } from '../script'
import { realtyEditAC } from './ac/realtyEditAC'
import { reduceObjByArray } from '../script'
import { setJustUpdatedResourceTrueAC } from './ac/flagsAC'


export const realtyEditAsync = id => async dispatch => {
  try {
    const response = await axios.get(route('realties.edit', id))
    const realtyModelFieldsList = getModelFieldsList(realtyFields)
    const responseData = reduceObjByArray(realtyModelFieldsList, response.data) 
    dispatch(realtyEditAC(responseData)) 

  }
  catch (error) {
    console.log(error)
  }
}