import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
//import { NavLink, withRouter, Redirect } from "react-router-dom"

// Actions
import { getFormDataImagesAC } from '../actions/ac/getFormDataImagesAC'
// import { realtyEditAsync } from '../actions/realtyEditAsync'
// import { imageUpdateAsync } from '../actions/imageUpdateAsync'

function FileInput ({
  realtyEdit,
  //imageUpdateAsync,
  //handleRealtyEdit,
  multiple,
  imgType,
  handleGetFormDataImages,
  input: {
    value: omitValue,
    onChange,
    onBlur,
    ...inputProps       
  },
  meta: omitMeta,
}) {

  const adaptFileEventToValue = (imgType, realtyId, imageUpdateAsync) => e => {    
    handleGetFormDataImages(e.target.files, imgType)  
  }

  return (
    <input
      onChange={adaptFileEventToValue(imgType, realtyEdit.id, imageUpdateAsync)}
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
    async handleGetFormDataImages(payload, imgType) {
      await dispatch(getFormDataImagesAC(payload, imgType)) 
      //await dispatch(imageUpdateAsync())     
    },
    // handleRealtyEdit(id) {
    //   dispatch(realtyEditAsync(id))
    // },
  }
}


export default compose(connect(mapStateToProps, mapDispatchToProps)(FileInput))
