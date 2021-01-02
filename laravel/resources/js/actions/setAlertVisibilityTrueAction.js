import { SET_ALERT_VISIBILITY_TRUE } from './consts';

export function setAlertVisibilityTrueAction() {
  return {
    type: SET_ALERT_VISIBILITY_TRUE, 
    isAlertVisible: true
  }
}

