import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

// Actions
import { getFormDataImagesAC } from '../actions/ac/getFormDataImagesAC'


function FileInput ({
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
  return { }
}

function mapDispatchToProps(dispatch) {
  return {    
    handleGetFormDataImages(payload, imgType) {
      dispatch(getFormDataImagesAC(payload, imgType))
    },
  }
}


export default compose(connect(mapStateToProps, mapDispatchToProps)(FileInput))
