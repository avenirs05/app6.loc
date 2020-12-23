// React, Redux, Router 
import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { NavLink, useParams } from "react-router-dom";

// React Bootstrap
import Button from 'react-bootstrap/Button';

// Actions
// Css Modules

function Realty() {
  let { id } = useParams() 
  
  return (
    <>     
      <div>
        <h3>ID real: {id}</h3>
      </div>    
      <NavLink to={"/admin/realties"}>
        <Button variant="secondary" className="mr-2">Отмена</Button>
      </NavLink>
      <Button variant="primary">Соранить</Button>    
    </>
  )
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(Realty)