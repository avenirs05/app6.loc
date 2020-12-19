import React from 'react'
import Pagination from 'react-bootstrap/Pagination'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from "react-router"

// Actions
import { getRealties } from '../actions/getRealties';

function PaginationContainer({ totalPages, currentPage, onGetRealties }) {
  let items = [];

  function test(some) {
    console.log(some)
  }

  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item 
        onClick={(e) => { e.preventDefault(); onGetRealties(number) }} 
        key={number} 
        active={number === currentPage}>
          {number}
      </Pagination.Item>,
    )
  }

  return (
    <>
      <Pagination>{items}</Pagination>
    </>
  )
}

function mapStateToProps(state) {
  return {
    totalPages: state.realties.totalPages,
    currentPage: state.realties.currentPage,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onGetRealties(pageNumber) {
      dispatch(getRealties(pageNumber))
    },
  }
}


export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(PaginationContainer)

