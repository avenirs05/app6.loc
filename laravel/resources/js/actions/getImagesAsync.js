import { getImagesAC } from './getImagesAC'


export const getImagesAsync = pageNumber => {
  return async dispatch => {
    const response = await axios.get(route('images.index') + `?page=${pageNumber}`)
    return dispatch(getImagesAC(response.data))
  }
}

