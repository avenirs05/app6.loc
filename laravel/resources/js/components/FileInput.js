import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

// Actions
import { getFileListAC } from '../actions/ac/getFileListAC'


function FileInput ({
  multiple,
  imgType,
  handleGetFileList,
  input: {
    value: omitValue,
    onChange,
    onBlur,
    ...inputProps       
  },
  meta: omitMeta,
}) {

  const adaptFileEventToValue = (imgType) => e => { 
    handleGetFileList(e.target.files, imgType)     
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
    handleGetFileList(payload, imgType) {
      dispatch(getFileListAC(payload, imgType))
    },
  }
}


export default compose(connect(mapStateToProps, mapDispatchToProps)(FileInput))
