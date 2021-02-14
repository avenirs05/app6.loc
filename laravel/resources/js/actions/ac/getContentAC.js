import { GET_CONTENT } from '../consts'


export const getContentAC = content => ({
  type: GET_CONTENT,
  payload: content
})


