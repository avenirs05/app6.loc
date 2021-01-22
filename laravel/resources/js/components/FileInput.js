import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
//import { NavLink, withRouter, Redirect } from "react-router-dom"

// Actions
import { getFormDataImagesAC } from '../actions/ac/getFormDataImagesAC'
// import { realtyEditAsync } from '../actions/realtyEditAsync'

function FileInput ({
  realtyEdit,
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

  const adaptFileEventToValue = (imgType) => e => { 
    
    
    handleGetFormDataImages(e.target.files, imgType)  

    //handleRealtyEdit(realtyId);
    //return <Redirect to="/realties" />   
  }

  return (
    <input
      onChange={adaptFileEventToValue(imgType)}
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
    },
    // handleRealtyEdit(id) {
    //   dispatch(realtyEditAsync(id))
    // },
  }
}


export default compose(connect(mapStateToProps, mapDispatchToProps)(FileInput))
