import { SET_ALERT_VISIBILITY_FALSE } from './consts';

export function setAlertVisibilityFalseAction() {
  return {
    type: SET_ALERT_VISIBILITY_FALSE, 
    isAlertVisible: false
  }
}