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
import { realtyFields as f } from '../consts'

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
        <p><b>{f.name.label}:</b> {this.props.realtyShow.name}</p> 
        <p><b>{f.subname_ru.label}:</b> {this.props.realtyShow.subname_ru}</p> 
        <p><b>{f.type_ru.label}:</b> {this.props.realtyShow.type_ru}</p> 
        <p><b>{f.country_ru.label}:</b> {this.props.realtyShow.country_ru}</p> 
        <p><b>{f.area_ru.label}:</b> {this.props.realtyShow.area_ru}</p> 
        <p><b>{f.city_ru.label}:</b> {this.props.realtyShow.city_ru}</p>        
        <p><b>{f.visibility.label}:</b> {this.props.realtyShow.visibility}</p> 
        <p><b>{f.square.label}:</b> {this.props.realtyShow.square} м<sup>2</sup></p> 
        <p><b>{f.bedrooms.label}:</b> {this.props.realtyShow.bedrooms}</p> 
        <p><b>{f.capacity.label}:</b> {this.props.realtyShow.capacity}</p> 
        <p><b>{f.price.label}:</b> {this.props.realtyShow.price}€</p> 
        <p><b>{f.price_line_through.label}:</b> {this.props.realtyShow.price_line_through}€</p> 
        <p><b>{f.booking_mark.label}:</b> {this.props.realtyShow.booking_mark}</p> 
        <p><b>{f.view_ru.label}:</b> {this.props.realtyShow.view_ru}</p> 
        <p><b>{f.dist_sea.label}:</b> {this.props.realtyShow.dist_sea}</p> 
        <p><b>{f.dist_tivat.label}:</b> {this.props.realtyShow.dist_tivat}</p> 
        <p><b>{f.dist_podg.label}:</b> {this.props.realtyShow.dist_podg}</p> 
        <p><b>{f.transfer_payment_ru.label}:</b> {this.props.realtyShow.transfer_payment_ru}</p>
        <p><b>{f.internet_payment_ru.label}:</b> {this.props.realtyShow.internet_payment_ru}</p>
        <p><b>{f.discount.label}:</b> {this.props.realtyShow.discount}</p>
        <p><b>{f.price_jan.label}:</b> {this.props.realtyShow.price_jan}</p>
        <p><b>{f.price_feb.label}:</b> {this.props.realtyShow.price_feb}</p>
        <p><b>{f.price_mar.label}:</b> {this.props.realtyShow.price_mar}</p>
        <p><b>{f.price_apr.label}:</b> {this.props.realtyShow.price_apr}</p>
        <p><b>{f.price_may.label}:</b> {this.props.realtyShow.price_may}</p>
        <p><b>{f.price_jun.label}:</b> {this.props.realtyShow.price_jun}</p>
        <p><b>{f.price_jul.label}:</b> {this.props.realtyShow.price_jul}</p>
        <p><b>{f.price_aug.label}:</b> {this.props.realtyShow.price_aug}</p>
        <p><b>{f.price_sep.label}:</b> {this.props.realtyShow.price_sep}</p>
        <p><b>{f.price_oct.label}:</b> {this.props.realtyShow.price_oct}</p>
        <p><b>{f.price_nov.label}:</b> {this.props.realtyShow.price_nov}</p>
        <p><b>{f.price_dec.label}:</b> {this.props.realtyShow.price_dec}</p>
        <p><b>{f.price_oct_apr.label}:</b> {this.props.realtyShow.price_oct_apr}</p>
        <div>
          <p>
            <b>{f.description_ru.label}:</b>
          </p> 
          <div>
            {this.props.realtyShow.description_ru}
          </div>
          <br/>
        </div> 
        <div>
          <p><b>{f.map_html.label}</b></p> 
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