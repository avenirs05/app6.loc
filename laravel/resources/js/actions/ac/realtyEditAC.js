import { REALTY_EDIT } from '../consts';

export const realtyEditAC = realty => ({
  type: REALTY_EDIT,
  ...realty
})


