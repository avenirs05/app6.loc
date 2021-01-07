
import { SET_BTN_DELETE_REALTY_CLICKED_TRUE } from '../actions/consts'
import { SET_BTN_DELETE_REALTY_CLICKED_FALSE } from '../actions/consts'

export default function isBtnUpdateRealtyClicked(state = false, action) {
  switch (action.type) {
    case SET_BTN_DELETE_REALTY_CLICKED_TRUE:
      return true
     
    case SET_BTN_DELETE_REALTY_CLICKED_FALSE:
      return false  
    
    default:
      return state  
  }
}