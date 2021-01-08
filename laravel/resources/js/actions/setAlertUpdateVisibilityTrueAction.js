import { SET_ALERT_UPDATE_VISIBILITY_TRUE } from './consts';

export function setAlertUpdateVisibilityTrueAction() {
  return {
    type: SET_ALERT_UPDATE_VISIBILITY_TRUE, 
    isAlertUpdateVisible: true
  }
}

