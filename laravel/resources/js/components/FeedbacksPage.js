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
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'

// Actions
import { getFeedbacksAsync } from '../actions/getFeedbacksAsync'
import { getFeedbacksSearchedAsync } from '../actions/getFeedbacksSearchedAsync'
import { feedbackDeleteAsync } from '../actions/feedbackDeleteAsync'
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
import FeedbacksCss from './css/Feedbacks.module.css'

// Hooks
import { useWatchActions } from './hooks'


function FeedbacksPage({ 
  feedbacks,
  totalPages,
  currentPage,
  perPage,
  getFeedbacks,
  getFeedbacksSearched,
  feedbackDelete,
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

  const [feedbackDeleteId, setFeedbackDeleteId] = useState(0)
  const [feedbackDeleteName, setFeedbackDeleteName] = useState('')

  useEffect(() => {
    getFeedbacks(currentPage)
  }, [])  

  useWatchActions(getFeedbacks, currentPage, noCreateAlert, noCreated, isCreated)             
  useWatchActions(getFeedbacks, currentPage, noUpdateAlert, noUpdated, isUpdated)             
  useWatchActions(getFeedbacks, currentPage, noDeleteAlert, noDeleted, isDeleted)             

  function onGetResource(e, currentPageNumber) {
    getFeedbacks(currentPageNumber)
  }

  function onDeleteResource(e, id) {    
    handleClose()
    feedbackDelete(id)   
  }

  function setCandidateToDelete(e, id, author) {
    handleShow() 
    setFeedbackDeleteId(() => id)
    setFeedbackDeleteName(() => author)
  }

  function showFeedbacksItems(currentPage, perPage) {
    return function(feedback, index) {
      let rowTableNumber = (currentPage * perPage) - perPage + 1 + index      
      return (
        <tr key={index}>
          <td className={TableCss.td}>{rowTableNumber}</td>
          <td>{feedback.date}</td>
          <td>{feedback.author}</td>
          <td>{feedback.realty.name}</td>
          <td className={TableCss.td_icon}>
            <NavLink to={`/feedbacks/${feedback.id}/edit`}>
              <EditOutlinedIcon color="primary" className={TableCss.icon}></EditOutlinedIcon>
            </NavLink>
          </td>
          <td className={TableCss.td_icon}>
            <NavLink to={`/feedbacks/${feedback.id}`}>
              <VisibilityOutlinedIcon color="primary" className={TableCss.icon}></VisibilityOutlinedIcon>
            </NavLink>
          </td>
          <td className={TableCss.td_icon}>
            <DeleteOutlineOutlinedIcon
              onClick={(e) => setCandidateToDelete(e, feedback.id, feedback.author)}
              color="primary"
              className={TableCss.icon}>
            </DeleteOutlineOutlinedIcon>
          </td>
        </tr>
      )
    }
  }

  function onGetFeedbacksSearched(e) {
    getFeedbacksSearched(e)
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
            onChange={onGetFeedbacksSearched}
          />
        </InputGroup>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-9 pl-0">
            <h2 className={`${FeedbacksCss.header} mb-4 mt-4 mr-4`}>Отзывы</h2>
            <Alert variant="success" show={isAlertCreateVisible} className={FeedbacksCss.alert}>Отзыв успешно создан!</Alert>
            <Alert variant="success" show={isAlertUpdateVisible} className={FeedbacksCss.alert}>Отзыв успешно изменён!</Alert>
            <Alert variant="success" show={isAlertDeleteVisible} className={FeedbacksCss.alert}>Отзыв успешно удалён!</Alert>
          </div>
          <div className={"col-sm-3 text-right pr-0"}>
            <NavLink to="/feedbacks/create">
              <Button className="mb-4 mt-4" variant="success">Создать новый отзыв</Button>
            </NavLink>
          </div>
        </div>
      </div>
      <Table bordered hover>
        <thead>
          <tr>
            <th>№</th>
            <th>Дата</th>
            <th>Автор</th>
            <th>Объект</th>
            <th className="td_icon"><EditOutlinedIcon color="primary"></EditOutlinedIcon></th>
            <th className="td_icon"><VisibilityOutlinedIcon color="primary"></VisibilityOutlinedIcon></th>
            <th className="td_icon"><DeleteOutlineOutlinedIcon color="primary"></DeleteOutlineOutlinedIcon></th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.items.map(showFeedbacksItems(currentPage, perPage))}
        </tbody>
      </Table>
      <Pagination>{getPaginationItems(currentPage, totalPages)}</Pagination>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Вы хотите удалить отзыв {feedbackDeleteName}?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Закрыть</Button>
          <Button variant="danger" onClick={(e) => onDeleteResource(e, feedbackDeleteId)}>Удалить навсегда</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

function mapStateToProps(state) {
  return {
    feedbacks: state.feedbacks,
    totalPages: state.feedbacks.totalPages,
    currentPage: state.feedbacks.currentPage,
    perPage: state.feedbacks.perPage,
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
    getFeedbacks(currentPageNumber) {
      dispatch(getFeedbacksAsync(currentPageNumber))
    },
    getFeedbacksSearched(e) {   
      dispatch(getFeedbacksSearchedAsync(e.target.value))
    },
    feedbackDelete(id) {      
      dispatch(feedbackDeleteAsync(id))
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


export default compose(connect(mapStateToProps, mapDispatchToProps))(FeedbacksPage)