import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

// Actions
import { getFileListAction } from '../actions/getFileListAction'


function FileInput ({
  onGetFileList,
  input: {
    value: omitValue,
    onChange,
    onBlur,
    ...inputProps    
  },
  meta: omitMeta,   
}) {

  const adaptFileEventToValue = () => e => {
    onGetFileList(e.target.files)  
  }

  return (
    <input
      onChange={adaptFileEventToValue()}
      type="file"
      multiple
      {...inputProps}
    />
  )
}

function mapStateToProps(state) {  
  return { }
}

function mapDispatchToProps(dispatch) {
  return {    
    onGetFileList(payload) {
      dispatch(getFileListAction(payload))
    },
  }
}


export default compose(connect(mapStateToProps, mapDispatchToProps)(FileInput))
