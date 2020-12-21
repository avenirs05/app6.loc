import React from 'react'
import Pagination from 'react-bootstrap/Pagination'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from "react-router"

import { getPath } from '../script'

// Actions
import { getRealties } from '../actions/getRealties';
import { getFeedbacks } from '../actions/getFeedbacks';

function PaginationContainer({   
  totalPages, 
  currentPage, 
  onGetRealties, 
  location,
  props
}) {
 
  let tmpArr = location.pathname.split('/')
  let resourceName = tmpArr[tmpArr.length - 1]
  
  if (resourceName === 'admin') {
    resourceName = 'realties'
  }

  let resourceNameUpper = _.startCase(resourceName)

  //console.log(_.startCase("aaa BBB ccc"));
  

  function onGetResource(e, number) {
    e.preventDefault();
    `onGet${resourceNameUpper}(number)`

    // switch(location.pathname) {
    //   case getPath(route('admin.index')):
    //     onGetRealties(number)         
    //     break 
    //   case getPath(route('realties.index')):
    //     onGetRealties(number)         
    //     break 
    //   case getPath(route('feedbacks.index')):
    //     onGetFeedbacks(number)         
    //     break
    // }   
  }

  
  let items = []
  
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item 
        onClick={ (e) => { onGetResource(e, number) }}  
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
    onGetFeedbacks(pageNumber) {
      dispatch(getFeedbacks(pageNumber))
    },
  }
}


export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(PaginationContainer)

