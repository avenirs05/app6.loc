import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

// Actions
import { getFileListAction } from '../actions/getFileListAction'


function FileInput ({
  multiple,
  imgType,
  onGetFileList,
  input: {
    value: omitValue,
    onChange,
    onBlur,
    ...inputProps       
  },
  meta: omitMeta,
}) {

  const adaptFileEventToValue = (imgType) => e => { 
    onGetFileList(e.target.files, imgType)     
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
    onGetFileList(payload, imgType) {
      dispatch(getFileListAction(payload, imgType))
    },
  }
}


export default compose(connect(mapStateToProps, mapDispatchToProps)(FileInput))
