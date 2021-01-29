import { FEEDBACK_SHOW } from '../consts';

export const feedbackShowAC = feedback => ({
  type: FEEDBACK_SHOW,
  ...feedback
})


