import { FEEDBACK_UPDATE } from '../consts';

export const feedbackUpdateAC = feedback => ({
  type: FEEDBACK_UPDATE,
  ...feedback
})


