// React, Redux, Router 
import React, { useEffect, useState } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { NavLink } from "react-router-dom"

// React Bootstrap
import Table from 'react-bootstrap/Table'
import Pagination from 'react-bootstrap/Pagination'
import Alert from 'react-bootstrap/Alert'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

// Material UI
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'

// Actions
import { getRealtiesAsync } from '../actions/getRealtiesAsync'
import { getRealtiesSearchedAsync } from '../actions/getRealtiesSearchedAsync'
import { realtyDeleteAsync } from '../actions/realtyDeleteAsync'
import {
  setJustCreatedResourceFalseAC,
  setJustUpdatedResourceFalseAC,
  setJustDeletedResourceFalseAC,
  setAlertCreateVisibilityFalseAC,
  setAlertUpdateVisibilityFalseAC,
  setAlertDeleteVisibilityFalseAC
} from '../actions/ac/flagsAC'

// Css Modules
import TableCss from './css/Table.module.css'
import RealtiesCss from './css/Realties.module.css'

// Hooks
import { useWatchActions } from './hooks'


function RealtiesPage({
  realties,
  totalPages,
  currentPage,
  perPage,
  getRealties,
  getRealtiesSearched,
  realtyDelete,
  setJustCreatedResourceFalse: noCreated,
  setJustUpdatedResourceFalse: noUpdated,
  setJustDeletedResourceFalse: noDeleted,
  setAlertCreateVisibilityFalse: noCreateAlert,
  setAlertUpdateVisibilityFalse: noUpdateAlert,
  setAlertDeleteVisibilityFalse: noDeleteAlert,
  isJustCreatedResource: isCreated,
  isJustUpdatedResource: isUpdated,
  isJustDeletedResource: isDeleted,
  isAlertCreateVisible,
  isAlertUpdateVisible,
  isAlertDeleteVisible,
}) {

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [realtyDeleteId, setRealtyDeleteId] = useState(0)
  const [realtyDeleteName, setRealtyDeleteName] = useState('')

  useWatchActions(getRealties, currentPage, noCreateAlert, noCreated, isCreated)
  useWatchActions(getRealties, currentPage, noUpdateAlert, noUpdated, isUpdated)
  useWatchActions(getRealties, currentPage, noDeleteAlert, noDeleted, isDeleted)

  function onGetResource(e, currentPageNumber) {
    getRealties(currentPageNumber)
  }

  function onDeleteResource(e, id) {
    handleClose()
    realtyDelete(id)
  }

  function setCandidateToDelete(e, id, name) {
    handleShow()
    setRealtyDeleteId(() => id)
    setRealtyDeleteName(() => name)
  }

  function showRealtiesItems(currentPage, perPage) {
    return function (realty, index) {
      let rowTableNumber = (currentPage * perPage) - perPage + 1 + index
      return (
        <tr key={index}>
          <td className={TableCss.td}>{rowTableNumber}</td>
          <td>{realty.name}</td>
          <td>{realty.type_ru}</td>
          <td>{realty.price}</td>
          <td>{realty.visibility}</td>
          <td className={TableCss.td}>{realty.id}</td>
          <td className={TableCss.td_icon}>
            <NavLink to={`/realties/${realty.id}/edit`}>
              <EditOutlinedIcon color="primary" className={TableCss.icon}></EditOutlinedIcon>
            </NavLink>
          </td>
          <td className={TableCss.td_icon}>
            <DeleteOutlineOutlinedIcon
              onClick={(e) => setCandidateToDelete(e, realty.id, realty.name)}
              color="primary"
              className={TableCss.icon}>
            </DeleteOutlineOutlinedIcon>
          </td>
        </tr>
      )
    }
  }

  function onGetRealtiesSearched(e) {
    getRealtiesSearched(e)
  }  

  const getPaginationItems = (currentPage, totalPages) => {
    let items = []
    for (let number = 1; number <= totalPages; number++) {
      items.push(
        <Pagination.Item
          onClick={(e) => { onGetResource(e, number) }} key={number} active={number === currentPage}>
          {number}
        </Pagination.Item>
      )
    }
    return items
  }

  return (
    <>
      <div>
        <InputGroup className="mb-3 mt-3">
          <FormControl
            placeholder="Введите название объекта"
            aria-label="Введите название объекта"
            aria-describedby="basic-addon2"
            onChange={onGetRealtiesSearched}
          />
        </InputGroup>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-9 pl-0">
            <h2 className={`${RealtiesCss.header} mb-4 mt-4 mr-4`}>Объекты</h2>
            <Alert variant="success" show={isAlertCreateVisible} className={RealtiesCss.alert}>Объект успешно создан!</Alert>
            <Alert variant="success" show={isAlertUpdateVisible} className={RealtiesCss.alert}>Объект успешно изменён!</Alert>
            <Alert variant="success" show={isAlertDeleteVisible} className={RealtiesCss.alert}>Объект успешно удалён!</Alert>
          </div>
          <div className={"col-sm-3 text-right pr-0"}>
            <NavLink to="/realties/create">
              <Button className="mb-4 mt-4" variant="success">Создать новый объект</Button>
            </NavLink>
          </div>
        </div>
      </div>
      <Table bordered hover>
        <thead>
          <tr>
            <th>№</th>
            <th>Название</th>
            <th>Тип</th>
            <th>Цена</th>
            <th>Видимость</th>
            <th>Id</th>
            <th className="td_icon"><EditOutlinedIcon color="primary"></EditOutlinedIcon></th>
            <th className="td_icon"><DeleteOutlineOutlinedIcon color="primary"></DeleteOutlineOutlinedIcon></th>
          </tr>
        </thead>
        <tbody>
          {realties.items.map(showRealtiesItems(currentPage, perPage))}
        </tbody>
      </Table>
      <Pagination>{getPaginationItems(currentPage, totalPages)}</Pagination>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Вы хотите удалить объект {realtyDeleteName}?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Закрыть</Button>
          <Button variant="danger" onClick={(e) => onDeleteResource(e, realtyDeleteId)}>Удалить навсегда</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

function mapStateToProps(state) {
  return {
    realties: state.realties,
    totalPages: state.realties.totalPages,
    currentPage: state.realties.currentPage,
    perPage: state.realties.perPage,
    isJustCreatedResource: state.isJustCreatedResource,
    isJustUpdatedResource: state.isJustUpdatedResource,
    isJustDeletedResource: state.isJustDeletedResource,
    isAlertCreateVisible: state.isAlertCreateVisible,
    isAlertUpdateVisible: state.isAlertUpdateVisible,
    isAlertDeleteVisible: state.isAlertDeleteVisible,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getRealties(currentPageNumber) {
      dispatch(getRealtiesAsync(currentPageNumber))
    },
    getRealtiesSearched(e) {   
      dispatch(getRealtiesSearchedAsync(e.target.value))
    },
    realtyDelete(id) {
      dispatch(realtyDeleteAsync(id))
    },
    setJustCreatedResourceFalse() {
      dispatch(setJustCreatedResourceFalseAC())
    },
    setJustUpdatedResourceFalse() {
      dispatch(setJustUpdatedResourceFalseAC())
    },
    setJustDeletedResourceFalse() {
      dispatch(setJustDeletedResourceFalseAC())
    },
    setAlertCreateVisibilityFalse() {
      dispatch(setAlertCreateVisibilityFalseAC())
    },
    setAlertUpdateVisibilityFalse() {
      dispatch(setAlertUpdateVisibilityFalseAC())
    },
    setAlertDeleteVisibilityFalse() {
      dispatch(setAlertDeleteVisibilityFalseAC())
    }
  }
}


export default compose(connect(mapStateToProps, mapDispatchToProps))(RealtiesPage)