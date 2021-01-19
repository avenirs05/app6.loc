import { GET_REALTIES } from '../consts';

export const getRealtiesAC = response => ({
  type: GET_REALTIES,
  items: response.data,
  totalPages: response.last_page,
  currentPage: response.current_page,
  perPage: response.per_page,
  totalItems: response.total,
})


