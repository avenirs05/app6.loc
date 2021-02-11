import { FEEDBACK_EDIT } from '../consts'

export const feedbackEditAC = feedback => ({
  type: FEEDBACK_EDIT,
  ...feedback
})