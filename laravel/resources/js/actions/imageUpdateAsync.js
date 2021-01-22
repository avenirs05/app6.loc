import { realtyModelFields } from '../script';
import { setJustUpdatedRealtyTrueAC } from './ac/flagsAC'
import { setAlertUpdateVisibilityTrueAC } from './ac/flagsAC'
import { realtyUpdateAC } from './ac/realtyUpdateAC'
import { getFormDataImagesAC } from './ac/getFormDataImagesAC'
import { reduceObjByArray } from '../script'


export const imageUpdateAsync = (realtyId, formDataImages) => 
  async () => {
    try {
      await formDataImages.set('realtyId', realtyId)
      await axios.post(route('images.download'), formDataImages)      
    }
    catch (error) {
      console.log(error)
    }
  }