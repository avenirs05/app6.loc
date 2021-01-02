// React, Redux, Router 
import React, { useEffect } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { NavLink } from "react-router-dom"

// React Bootstrap
import Table from 'react-bootstrap/Table'
import Pagination from 'react-bootstrap/Pagination'
import Alert from 'react-bootstrap/Alert'

// Material UI
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'

// Actions
import { getRealtiesAction } from '../actions/getRealtiesAction'
import { setBtnUpdateRealtyClickedFalseAction } from '../actions/setBtnUpdateRealtyClickedFalseAction'
import { setAlertVisibilityTrueAction } from '../actions/setAlertVisibilityTrueAction'
import { setAlertVisibilityFalseAction } from '../actions/setAlertVisibilityFalseAction'

// Css Modules
import TableCss from './css/Table.module.css'


function Realties({ realties, 
                    totalPages, 
                    currentPage, 
                    perPage, 
                    onGetRealties, 
                    setBtnUpdateRealtyClickedFalse,
                    isBtnUpdateRealtyClicked,
                    setAlertVisibilityTrue,
                    setAlertVisibilityFalse,
                    isAlertVisible}) { 
   
  useEffect(() => { 
    setBtnUpdateRealtyClickedFalse()
    onGetRealties(currentPage)     
  }, [isBtnUpdateRealtyClicked])             
    

  useEffect(() => { 
    if (isBtnUpdateRealtyClicked) {
      setAlertVisibilityTrue()
      window.setTimeout(() => {
        setAlertVisibilityFalse()
      }, 2000)
    }  
  }, [isAlertVisible])

  function onGetResource(e, currentPageNumber) {
    e.preventDefault()
    onGetRealties(currentPageNumber)
  }

  function showRealtiesItems(currentPage, perPage) {
    return function(realty, index) {
      let rowTableNumber = (currentPage * perPage) - perPage + 1 + index
      return (
        <tr key={index}>
          <td className={TableCss.td}>{rowTableNumber}</td>
          <td>{realty.name}</td>
          <td>{realty.type_en}</td>
          <td>{realty.price}</td>
          <td>{realty.visibility}</td>
          <td className={TableCss.tdIcon}>
            <NavLink to={`/realties/${realty.id}/edit`}>
              <EditOutlinedIcon color="primary" className={TableCss.icon}></EditOutlinedIcon>  
            </NavLink>  
          </td>
          <td className={TableCss.tdIcon}>
            <NavLink to={`/realties/${realty.id}`}>
              <VisibilityOutlinedIcon color="primary" className={TableCss.icon}></VisibilityOutlinedIcon>  
            </NavLink>        
          </td>
          <td className={TableCss.tdIcon}>
            <DeleteOutlineOutlinedIcon color="primary" className={TableCss.icon}></DeleteOutlineOutlinedIcon>
          </td>
        </tr>
      )
    }
  } 

  let items = []
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item
        onClick={(e) => {onGetResource(e, number)}} key={number} active={number === currentPage}>
        {number}
      </Pagination.Item>
    )
  }  
 
  return (
    <>    
      <h2 className="mb-4 mt-4">Объекты</h2>
      <Alert variant="success" show={isAlertVisible}>Объект успешно изменен!</Alert>       
      <Table bordered hover>
        <thead>
          <tr>
            <th>№</th>
            <th>Название</th>
            <th>Тип</th>
            <th>Цена</th>
            <th>Видимость</th>
            <th className="tdIcon"><EditOutlinedIcon color="primary"></EditOutlinedIcon></th>
            <th className="tdIcon"><VisibilityOutlinedIcon color="primary"></VisibilityOutlinedIcon></th>
            <th className="tdIcon"><DeleteOutlineOutlinedIcon color="primary"></DeleteOutlineOutlinedIcon></th>
          </tr>
        </thead>
        <tbody>
          {realties.items.map(showRealtiesItems(currentPage, perPage))}
        </tbody>
      </Table>
      <Pagination>{items}</Pagination>  
    </>
  )
}

function mapStateToProps(state) {
  return {
    realties: state.realties,
    totalPages: state.realties.totalPages,
    currentPage: state.realties.currentPage,
    perPage: state.realties.perPage,
    isBtnUpdateRealtyClicked: state.isBtnUpdateRealtyClicked,
    isAlertVisible: state.isAlertVisible
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onGetRealties(currentPageNumber) {
      dispatch(getRealtiesAction(currentPageNumber))
    },
    setBtnUpdateRealtyClickedFalse() {
      dispatch(setBtnUpdateRealtyClickedFalseAction())
    },
    setAlertVisibilityTrue() {
      dispatch(setAlertVisibilityTrueAction())
    },
    setAlertVisibilityFalse() {
      dispatch(setAlertVisibilityFalseAction())
    }
  }
}


export default compose(connect(mapStateToProps, mapDispatchToProps))(Realties)