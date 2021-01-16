// React, Redux, Router 
import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

// React Bootstrap
import Table from 'react-bootstrap/Table'
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'
import Pagination from 'react-bootstrap/Pagination'

// Actions
import { getFeedbacksAsync } from '../actions/getFeedbacksAsync'

// Css Modules
import TableCss from './css/Table.module.css'


function Feedbacks({feedbacks, totalPages, currentPage, perPage, getFeedbacks}) {
  function onGetResource(e, number) {
    e.preventDefault()
    getFeedbacks(number)
  }

  function showFeedbacksItems(currentPage, perPage) {
    return function(feedback, index) {
      let rowTableNumber = (currentPage * perPage) - perPage + 1 + index
      return (
        <tr key={index}>
          <td className={TableCss.td}>{rowTableNumber}</td>
          <td>{feedback.author}</td>
          <td>{feedback.date}</td>
          <td className={TableCss.td_icon}><EditOutlinedIcon color="primary"></EditOutlinedIcon></td>
          <td className={TableCss.td_icon}><VisibilityOutlinedIcon color="primary"></VisibilityOutlinedIcon></td>
          <td className={TableCss.td_icon}><DeleteOutlineOutlinedIcon color="primary"></DeleteOutlineOutlinedIcon></td>
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
      </Pagination.Item>,
    )
  }

  return (
    <>
      <h2 className="mb-4 mt-4">Отзывы</h2>
      <Table bordered hover>
        <thead>
          <tr>
            <th>№</th>
            <th>Автор</th>
            <th>Дата</th>
            <th className="td_icon"><EditOutlinedIcon color="primary"></EditOutlinedIcon></th>
            <th className="td_icon"><VisibilityOutlinedIcon color="primary"></VisibilityOutlinedIcon></th>
            <th className="td_icon"><DeleteOutlineOutlinedIcon color="primary"></DeleteOutlineOutlinedIcon></th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.items.map(showFeedbacksItems(currentPage, perPage))}    
        </tbody>
      </Table>
      <Pagination>{items}</Pagination>      
    </>
  )
}

function mapStateToProps(state) {
  return {
    feedbacks: state.feedbacks,
    totalPages: state.feedbacks.totalPages,
    currentPage: state.feedbacks.currentPage,
    perPage: state.feedbacks.perPage,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getFeedbacks(pageNumber) {
      dispatch(getFeedbacksAsync(pageNumber))
    },
  }
}


export default compose(connect(mapStateToProps, mapDispatchToProps))(Feedbacks)







