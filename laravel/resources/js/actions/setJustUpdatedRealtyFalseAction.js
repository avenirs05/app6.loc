import { SET_JUST_UPDATED_REALTY_FALSE } from './consts';

export function setJustUpdatedRealtyFalseAction() {
  return {
    type: SET_JUST_UPDATED_REALTY_FALSE, 
    isJustUpdatedRealty: false
  }
}

