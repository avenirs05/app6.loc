import { REALTY_CREATE } from './consts';
import { allRealtyDbFields } from '../script';
import { setJustCreatedRealtyTrueAction } from './setJustCreatedRealtyTrueAction'
import { setAlertCreateVisibilityTrueAction } from './setAlertCreateVisibilityTrueAction'


export function realtyCreateAction(values, fileList) {
  let formData = new FormData()
  
  for (let key in values) {
    formData.set(key, values[key])
  }

  return function(dispatch) {  
    axios.post(route('realties.store'), formData) 
           .then((response) => { 
             //console.log(response)
             fileList.set('realtyId', response.data)
             return axios.post(route('test'), fileList)
               .then((response) => {
                 console.log(response)
               })
            })
           .then(() => dispatch(setJustCreatedRealtyTrueAction()))
           .then(() => dispatch(setAlertCreateVisibilityTrueAction()))
           .catch(error => { 
             console.log(error) 
          })
  }
}

