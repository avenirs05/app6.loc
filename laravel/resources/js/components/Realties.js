// React, Redux, Router 
import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from "react-router"

// React Bootstrap
import Table from 'react-bootstrap/Table'
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'
import Pagination from 'react-bootstrap/Pagination'

// Actions
import { getRealties } from '../actions/getRealties'

// Css Modules
import TableCss from './css/Table.module.css'


function Realties({ realties, totalPages, currentPage, onGetRealties }) {
  function onGetResource(e, number) {
    e.preventDefault()
    onGetRealties(number)
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
            <th>Цена</th>
            <th>Видимость</th>
            <th className="tdIcon"><EditOutlinedIcon color="primary"></EditOutlinedIcon></th>
            <th className="tdIcon"><VisibilityOutlinedIcon color="primary"></VisibilityOutlinedIcon></th>
            <th className="tdIcon"><DeleteOutlineOutlinedIcon color="primary"></DeleteOutlineOutlinedIcon></th>
          </tr>
        </thead>
        <tbody>
          {
            realties.items.map((realty, index) =>
              <tr key={index}>
                <td className={TableCss.td}>{++index}</td>
                <td>{realty.name}</td>
                <td>{realty.type_en}</td>
                <td>{realty.price}</td>
                <td>{realty.visibility}</td>
                <td className={TableCss.tdIcon}><EditOutlinedIcon color="primary"></EditOutlinedIcon></td>
                <td className={TableCss.tdIcon}><VisibilityOutlinedIcon color="primary"></VisibilityOutlinedIcon></td>
                <td className={TableCss.tdIcon}><DeleteOutlineOutlinedIcon color="primary"></DeleteOutlineOutlinedIcon></td>
              </tr>
            )
          }
        </tbody>
      </Table>
      <Pagination>{items}</Pagination>
    </>
  );
}

function mapStateToProps(state) {
  return {
    realties: state.realties,
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

export default compose(connect(mapStateToProps, mapDispatchToProps))(Realties)







