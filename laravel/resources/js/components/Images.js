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
import { getImages } from '../actions/getImages'

// Css Modules
import TableCss from './css/Table.module.css'


function Images({images, totalPages, currentPage, perPage, onGetImages}) {
  function onGetResource(e, number) {
    e.preventDefault()
    onGetImages(number)
  }

  function showImagesItems(currentPage, perPage) {
    return function(image, index) {
      let rowTableNumber = (currentPage * perPage) - perPage + 1 + index
      return (
        <tr key={index}>
          <td className={TableCss.td}>{rowTableNumber}</td>
          <td>{image.name}</td>
          <td>{image.type}</td>
          <td className={TableCss.tdIcon}><EditOutlinedIcon color="primary"></EditOutlinedIcon></td>
          <td className={TableCss.tdIcon}><VisibilityOutlinedIcon color="primary"></VisibilityOutlinedIcon></td>
          <td className={TableCss.tdIcon}><DeleteOutlineOutlinedIcon color="primary"></DeleteOutlineOutlinedIcon></td>
        </tr>
      )
    }
  }  

  let items = []
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item
        onClick={(e) => { onGetResource(e, number) }} key={number} active={number === currentPage}>
        {number}
      </Pagination.Item>,
    )
  }

  return (
    <>
      <Table bordered hover>
        <thead>
          <tr>
            <th>№</th>
            <th>Название</th>
            <th>Тип</th>
            <th className="tdIcon"><EditOutlinedIcon color="primary"></EditOutlinedIcon></th>
            <th className="tdIcon"><VisibilityOutlinedIcon color="primary"></VisibilityOutlinedIcon></th>
            <th className="tdIcon"><DeleteOutlineOutlinedIcon color="primary"></DeleteOutlineOutlinedIcon></th>
          </tr>
        </thead>
        <tbody>
          {images.items.map(showImagesItems(currentPage, perPage))}  
        </tbody>        
      </Table>
      <Pagination>{items}</Pagination> 
    </>
  );
}

function mapStateToProps(state) {
  return {
    images: state.images,
    totalPages: state.images.totalPages,
    currentPage: state.images.currentPage,
    perPage: state.images.perPage,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onGetImages(pageNumber) {
      dispatch(getImages(pageNumber))
    },
  }
}


export default compose(connect(mapStateToProps, mapDispatchToProps))(Images)







