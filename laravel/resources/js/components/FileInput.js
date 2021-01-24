import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

// Actions
import { realtyMainImageLoadAsync } from '../actions/realtyMainImageLoadAsync'

function FileInput ({
  realtyEdit,
  handleRealtyMainImageLoad,
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

  const adaptFileEventToValue = (imgType, realtyId, handleRealtyMainImageLoad) => e => {   
    if (imgType === 'main_image') {
      let formData = new FormData()
      formData.set('main_image', e.target.files[0])
      formData.set('imgType', imgType)
      formData.set('realtyId', realtyId)
      handleRealtyMainImageLoad(formData)
    }        
  }

  return (
    <input
      onChange={adaptFileEventToValue(imgType, realtyEdit.id, handleRealtyMainImageLoad)}
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
    }
  }
}


export default compose(connect(mapStateToProps, mapDispatchToProps)(FileInput))
