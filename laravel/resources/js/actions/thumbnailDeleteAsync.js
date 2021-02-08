import { realtyEditAsync } from './realtyEditAsync'


export const thumbnailDeleteAsync = thumbnail => async dispatch => {
  try {
    await axios.delete(route('realty-delete-image', thumbnail.id))
    dispatch(realtyEditAsync(thumbnail.realty_id))
  } catch (error) {
    console.log(error)
  }
}
