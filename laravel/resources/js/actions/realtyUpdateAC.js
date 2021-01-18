import { REALTY_UPDATE } from './consts';

export const realtyUpdateAC = realty => ({
  type: REALTY_UPDATE,
  ...realty
})


