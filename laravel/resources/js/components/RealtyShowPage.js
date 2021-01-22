// React, Redux, Router 
import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { NavLink, withRouter } from "react-router-dom"

// React Bootstrap
import Button from 'react-bootstrap/Button'

// Actions
import { realtyShowAsync } from '../actions/realtyShowAsync'

// Helpers
import { realtyLabels as l } from '../script'

class RealtyShowPage extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.handleRealtyShow(this.props.match.params.id)
  }

  render() {
    return (      
      <>
        <NavLink to="/realties">
          <Button size="sm" variant="outline-secondary" className="mt-3 mb-3">Назад</Button>
        </NavLink> 
        <h3 className="mt-3 mb-3">{this.props.realtyShow.name}</h3> 
        <p><b>{l.name}:</b> {this.props.realtyShow.name}</p> 
        <p><b>{l.subname_ru}:</b> {this.props.realtyShow.subname_ru}</p> 
        <p><b>{l.type_ru}:</b> {this.props.realtyShow.type_ru}</p> 
        <p><b>{l.country_ru}:</b> {this.props.realtyShow.country_ru}</p> 
        <p><b>{l.area_ru}:</b> {this.props.realtyShow.area_ru}</p> 
        <p><b>{l.city_ru}:</b> {this.props.realtyShow.city_ru}</p>        
        <p><b>{l.visibility}:</b> {this.props.realtyShow.visibility}</p> 
        <p><b>{l.square}:</b> {this.props.realtyShow.square} м<sup>2</sup></p> 
        <p><b>{l.bedrooms}:</b> {this.props.realtyShow.bedrooms}</p> 
        <p><b>{l.capacity}:</b> {this.props.realtyShow.capacity}</p> 
        <p><b>{l.price}:</b> {this.props.realtyShow.price}€</p> 
        <p><b>{l.price_line_through}:</b> {this.props.realtyShow.price_line_through}€</p> 
        <p><b>{l.booking_mark}:</b> {this.props.realtyShow.booking_mark}</p> 
        <p><b>{l.view_ru}:</b> {this.props.realtyShow.view_ru}</p> 
        <p><b>{l.dist_sea}:</b> {this.props.realtyShow.dist_sea}</p> 
        <p><b>{l.dist_tivat}:</b> {this.props.realtyShow.dist_tivat}</p> 
        <p><b>{l.dist_podg}:</b> {this.props.realtyShow.dist_podg}</p> 
        <p><b>{l.transfer_payment_ru}:</b> {this.props.realtyShow.transfer_payment_ru}</p>
        <p><b>{l.internet_payment_ru}:</b> {this.props.realtyShow.internet_payment_ru}</p>
        <p><b>{l.discount}:</b> {this.props.realtyShow.discount}</p>
        <p><b>{l.price_jan}:</b> {this.props.realtyShow.price_jan}</p>
        <p><b>{l.price_feb}:</b> {this.props.realtyShow.price_feb}</p>
        <p><b>{l.price_mar}:</b> {this.props.realtyShow.price_mar}</p>
        <p><b>{l.price_apr}:</b> {this.props.realtyShow.price_apr}</p>
        <p><b>{l.price_may}:</b> {this.props.realtyShow.price_may}</p>
        <p><b>{l.price_jun}:</b> {this.props.realtyShow.price_jun}</p>
        <p><b>{l.price_jul}:</b> {this.props.realtyShow.price_jul}</p>
        <p><b>{l.price_aug}:</b> {this.props.realtyShow.price_aug}</p>
        <p><b>{l.price_sep}:</b> {this.props.realtyShow.price_sep}</p>
        <p><b>{l.price_oct}:</b> {this.props.realtyShow.price_oct}</p>
        <p><b>{l.price_nov}:</b> {this.props.realtyShow.price_nov}</p>
        <p><b>{l.price_dec}:</b> {this.props.realtyShow.price_dec}</p>
        <p><b>{l.price_oct_apr}:</b> {this.props.realtyShow.price_oct_apr}</p>
        <div>
          <p><b>{l.description_ru}:</b></p> 
          <div>
            {this.props.realtyShow.description_ru}
          </div>
          <br/>
        </div> 
        <div>
          <p><b>{l.map_html}</b></p> 
          <div style={{overflowWrap: 'break-word'}}>
            {this.props.realtyShow.map_html}
          </div>          
        </div>
        <NavLink to="/realties">
          <Button size="sm" variant="outline-secondary" className="mt-3 mb-5">Назад</Button>
        </NavLink> 
      </>
    )
  }
}  

function mapStateToProps(state) {
  return {
    realtyShow: state.realtyShow,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleRealtyShow(id) {
      dispatch(realtyShowAsync(id))
    },
  }
}

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(RealtyShowPage)