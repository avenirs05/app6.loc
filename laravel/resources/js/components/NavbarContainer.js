import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from "react-router"

// React Bootstrap
import Navbar from 'react-bootstrap/Navbar'

// Css Modules
import NavBarCss from './css/NavBar.module.css';

function NavbarContainer() {
  function logout(e) {
    e.preventDefault() 
    document.getElementById('logout-form').submit()
  }

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand>
          <img
          src="/images/myfox.png"
          width="30"
          height="30"
          className="d-inline-block align-top mr-2"
        />
          Админ Панель          
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <a className={`${NavBarCss.a} mr-4`} href="/">На сайт</a> 
          <a className={NavBarCss.a} href="#" onClick={logout}>Выйти</a> 
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}


function mapStateToProps(state) { return {} }
function mapDispatchToProps(dispatch) { return {} }


export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(NavbarContainer)

