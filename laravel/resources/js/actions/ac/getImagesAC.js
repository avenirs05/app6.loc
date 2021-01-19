import { GET_IMAGES } from '../consts';

export const getImagesAC = response => ({
  type: GET_IMAGES,
  items: response.data,
  totalPages: response.last_page,
  currentPage: response.current_page,
  perPage: response.per_page,
  totalItems: response.total,
})


