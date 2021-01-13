import React, { useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { GET_FILE_LIST } from '../actions/consts';

// React Bootstrap
// Actions
// Helpers
// Css Modules


function FileInput ({
  onGetFileList,
  input: {
    value: omitValue,
    onChange,
    onBlur,
    ...inputProps    
  },
  meta: omitMeta,   
  ...custom 
}) {



  const adaptFileEventToValue = () => e => {
    onGetFileList(e.target.files)  
  }

  return (
    <input
      onChange={adaptFileEventToValue(onGetFileList)}
      type="file"
      multiple
      {...inputProps}
    />
  )
}

function mapStateToProps(state) {  
  return {
    //fileList: state.fileList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onGetFileList(payload) {
      dispatch({
        type: GET_FILE_LIST,
        payload
      })
    },
  }
}


export default compose(connect(mapStateToProps, mapDispatchToProps)(FileInput))
