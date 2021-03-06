import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

// Actions
import { realtyMainImageLoadAsync } from '../actions/realtyMainImageLoadAsync'
import { realtyThumbnailsLoadAsync } from '../actions/realtyThumbnailsLoadAsync'

// AC
import { createFormDataImagesAC } from '../actions/ac/createFormDataImagesAC'


function FileInput ({
  saveBtnRef,
  realtyEdit,
  createFormDataImages,
  realtyMainImageLoad,
  realtyThumbnailsLoad,  
  multiple,
  imgType,
  input: {
    value: omitValue,
    onChange,
    onBlur,
    ...inputProps       
  },
  meta: omitMeta,
}) { 
  

  const adaptFileEventToValue = (imgType, realtyId, saveBtnRef) => e => {    
    if (imgType === 'main_image_create' || imgType === 'thumbnails_create') {   
      createFormDataImages(e.target.files, imgType)      
    }    
    
    if (imgType === 'main_image_change') {  
      let formData = new FormData()
      formData.set('main_image', e.target.files[0])
      formData.set('imgType', imgType)
      formData.set('realtyId', realtyId)
      realtyMainImageLoad(formData)
      saveBtnRef.removeAttribute("disabled");
    }        

    if (imgType === 'thumbnails_add') { 
      let formData = new FormData()
      let thumbnails = e.target.files
      for (let key in thumbnails) {
        formData.append('thumbnails[]', thumbnails[key]) 
      }
      formData.set('imgType', imgType)
      formData.set('realtyId', realtyId)
      realtyThumbnailsLoad(formData)
      saveBtnRef.removeAttribute("disabled");
    }  
  }

  return (
    <input
      onChange={adaptFileEventToValue(imgType, realtyEdit.id, saveBtnRef)}
      type="file"
      multiple={multiple}
      {...inputProps}
    />
  )
}

function mapStateToProps(state) {  
  return { 
    realtyEdit: state.realtyEdit,
  }
}

function mapDispatchToProps(dispatch) {
  return {    
    realtyMainImageLoad(formData) {
      dispatch(realtyMainImageLoadAsync(formData))
    },
    realtyThumbnailsLoad(formData) {
      dispatch(realtyThumbnailsLoadAsync(formData))
    },
    createFormDataImages(payload, imgType) {     
      dispatch(createFormDataImagesAC(payload, imgType))      
    },
  }
}


export default compose(connect(mapStateToProps, mapDispatchToProps)(FileInput))
