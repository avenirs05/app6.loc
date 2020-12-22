import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from "react-router"

function Test() {
  return (
    <>
      <div>Test!</div>
    </>
  )
}


function mapStateToProps(state) { return {} }
function mapDispatchToProps(dispatch) { return {} }


export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(Test)

