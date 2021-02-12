import { compose } from 'redux'
import { feedbackShowAC } from './ac/feedbackShowAC'
import { getPropListFromObjByFlag } from '../script'
import { feedbackFields } from '../consts'


export const feedbackShowAsync = id => async dispatch => {
  try {     
    const response = await axios.get(route('feedbacks.show', id))        
    //const propList = getPropListFromObjByFlag(feedbackFields, 'inShowAction')  
    
    return compose(
      dispatch,
      feedbackShowAC,   
    ) (response.data)
  }
  catch (error) {
    console.log(error)
  }    
}