import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

// Actions
import { realtyMainImageLoadAsync } from '../actions/realtyMainImageLoadAsync'
import { realtyThumbnailsLoadAsync } from '../actions/realtyThumbnailsLoadAsync'

import { getFormDataImagesAC } from '../actions/ac/getFormDataImagesAC'

function FileInput ({
  realtyEdit,
  handleGetFormDataImages,
  handleRealtyMainImageLoad,
  handleRealtyThumbnailsLoad,  
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

  const adaptFileEventToValue = (imgType, realtyId) => e => {  
    
    if (imgType === 'main_image' || imgType === 'thumbnails') {   
      handleGetFormDataImages(e.target.files, imgType)      
    }    
    
    if (imgType === 'change_main_image') {
      console.log('change_main_image');
      
      let formData = new FormData()
      formData.set('main_image', e.target.files[0])
      formData.set('imgType', imgType)
      formData.set('realtyId', realtyId)
      handleRealtyMainImageLoad(formData)
    }        

    if (imgType === 'change_thumbnails') {
      let formData = new FormData()
      let thumbnails = e.target.files
      for (let key in thumbnails) {
        formData.append('thumbnails[]', thumbnails[key]) 
      }
      formData.set('imgType', imgType)
      formData.set('realtyId', realtyId)
      handleRealtyThumbnailsLoad(formData)
    }  
  }

  return (
    <input
      onChange={adaptFileEventToValue(imgType, realtyEdit.id)}
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
    handleRealtyMainImageLoad(formData) {
      dispatch(realtyMainImageLoadAsync(formData))
    },
    handleRealtyThumbnailsLoad(formData) {
      dispatch(realtyThumbnailsLoadAsync(formData))
    },
    handleGetFormDataImages(payload, imgType) {     
      dispatch(getFormDataImagesAC(payload, imgType))      
    },
  }
}


export default compose(connect(mapStateToProps, mapDispatchToProps)(FileInput))
