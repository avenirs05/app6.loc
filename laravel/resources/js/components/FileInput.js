import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

// Actions
import { loadMainImageAsync } from '../actions/loadMainImageAsync'

function FileInput ({
  realtyEdit,
  handleLoadMainImageAsync,
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

  const adaptFileEventToValue = (imgType, realtyId, handleLoadMainImageAsync) => e => {   
    if (imgType === 'main_image') {
      let formData = new FormData()
      formData.set('main_image', e.target.files[0])
      formData.set('imgType', imgType)
      formData.set('realtyId', realtyId)
      handleLoadMainImageAsync(formData)
    }        
  }

  return (
    <input
      onChange={adaptFileEventToValue(imgType, realtyEdit.id, handleLoadMainImageAsync)}
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
    handleLoadMainImageAsync(formData) {
      dispatch(loadMainImageAsync(formData))
    }
  }
}


export default compose(connect(mapStateToProps, mapDispatchToProps)(FileInput))
