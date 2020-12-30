export default function isBtnUpdateRealtyClicked(state = false, action) {
  switch (action.type) {
    case 'SET_BTN_UPDATE_REALTY_CLICKED_TRUE':
      return true
     
    case 'SET_BTN_UPDATE_REALTY_CLICKED_FALSE':
      return false  
    
    default:
      return state  
  }
}