import { REALTY_SHOW } from '../consts';

export const realtyShowAC = realty => ({
  type: REALTY_SHOW,
  ...realty
})


