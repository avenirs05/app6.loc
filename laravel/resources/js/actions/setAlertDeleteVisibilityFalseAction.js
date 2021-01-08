import { SET_ALERT_DELETE_VISIBILITY_FALSE } from './consts';

export function setAlertDeleteVisibilityFalseAction() {
  return {
    type: SET_ALERT_DELETE_VISIBILITY_FALSE, 
    isAlertUpdateVisible: false
  }
}

