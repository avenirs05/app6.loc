import { allRealtyDbFields } from '../script'
import { realtyEditAC } from './ac/realtyEditAC'
import { reduceObjByArray } from '../script'


export const realtyEditAsync = id =>
  async dispatch => {
    try {
      const response = await axios.get(route('realties.edit', id))
      return dispatch(realtyEditAC(reduceObjByArray(allRealtyDbFields, response.data)))
    }
    catch (error) {
      console.log(error)
    }
  }