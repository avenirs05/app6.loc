// React, Redux, Router 
import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from "react-router"

// React Bootstrap
import Table from 'react-bootstrap/Table'
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

// Css Modules
import TableCss from './css/Table.module.css';


function Realties({realties}) {
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
                <td style={{textAlign: 'center', width: '15px'}}>{++index}</td>
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
    </>
  );
}

function mapStateToProps(state) {
  return {
    realties: state.realties,
  }
}

function mapDispatchToProps(dispatch) { 
  return {

  } 
}


export default compose(withRouter, connect(mapStateToProps, null))(Realties)







