import { GET_FEEDBACKS } from '../consts';

export const getFeedbacksAC = response => ({
  type: GET_FEEDBACKS,
  items: response.data,
  totalPages: response.last_page,
  currentPage: response.current_page,
  perPage: response.per_page,
  totalItems: response.total,
})


