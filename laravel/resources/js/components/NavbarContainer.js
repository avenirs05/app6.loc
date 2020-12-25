import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from "react-router"

import Navbar from 'react-bootstrap/Navbar'


function NavbarContainer() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="#home">Admin Panel mybudva.ru</Navbar.Brand>
      </Navbar>
    </>
  )
}


function mapStateToProps(state) { return {} }
function mapDispatchToProps(dispatch) { return {} }


export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(NavbarContainer)

