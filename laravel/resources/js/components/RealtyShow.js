// React, Redux, Router 
import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { NavLink, withRouter } from "react-router-dom"

// React Bootstrap
import Button from 'react-bootstrap/Button'

// Actions
import { realtyShowAsync } from '../actions/realtyShowAsync'


class RealtyShow extends Component {
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
        <p><b>Название объекта:</b> {this.props.realtyShow.name}</p> 
        <p><b>Описание краткое:</b> {this.props.realtyShow.subname_ru}</p> 
        <p><b>Тип:</b> {this.props.realtyShow.type_ru}</p> 
        <p><b>Страна:</b> {this.props.realtyShow.country_ru}</p> 
        <p><b>Район:</b> {this.props.realtyShow.area_ru}</p> 
        <p><b>Город:</b> {this.props.realtyShow.city_ru}</p>        
        <p><b>Видимость:</b> {this.props.realtyShow.visibility}</p> 
        <p><b>Площадь:</b> {this.props.realtyShow.square} м<sup>2</sup></p> 
        <p><b>Спален:</b> {this.props.realtyShow.bedrooms}</p> 
        <p><b>Вместимость, человек:</b> {this.props.realtyShow.capacity}</p> 
        <p><b>Цена:</b> {this.props.realtyShow.price}€</p> 
        <p><b>Цена перечеркнутая:</b> {this.props.realtyShow.price_line_through}€</p> 
        <p><b>Букинг (оценка):</b> {this.props.realtyShow.booking_mark}</p> 
        <p><b>Вид:</b> {this.props.realtyShow.view_ru}</p> 
        <p><b>До моря, метров:</b> {this.props.realtyShow.dist_sea}</p> 
        <p><b>До аэропорта Тиват:</b> {this.props.realtyShow.dist_tivat}</p> 
        <p><b>До аэропорта Подгорица:</b> {this.props.realtyShow.dist_podg}</p> 
        <p><b>Трансфер:</b> {this.props.realtyShow.transfer_payment_ru}</p>
        <p><b>Интернет:</b> {this.props.realtyShow.internet_payment_ru}</p>
        <p><b>Скидка:</b> {this.props.realtyShow.discount}</p>
        <p><b>Цена январь:</b> {this.props.realtyShow.price_jan}</p>
        <p><b>Цена февраль:</b> {this.props.realtyShow.price_feb}</p>
        <p><b>Цена март:</b> {this.props.realtyShow.price_mar}</p>
        <p><b>Цена апрель:</b> {this.props.realtyShow.price_apr}</p>
        <p><b>Цена май:</b> {this.props.realtyShow.price_may}</p>
        <p><b>Цена июнь:</b> {this.props.realtyShow.price_jun}</p>
        <p><b>Цена июль:</b> {this.props.realtyShow.price_jul}</p>
        <p><b>Цена август:</b> {this.props.realtyShow.price_aug}</p>
        <p><b>Цена сентябрь:</b> {this.props.realtyShow.price_sep}</p>
        <p><b>Цена октябрь:</b> {this.props.realtyShow.price_oct}</p>
        <p><b>Цена ноябрь:</b> {this.props.realtyShow.price_nov}</p>
        <p><b>Цена декабрь:</b> {this.props.realtyShow.price_dec}</p>
        <p><b>Цена октябрь - апрель:</b> {this.props.realtyShow.price_oct_apr}</p>
        <div>
          <p><b>Описание подробное:</b></p> 
          <div>
            {this.props.realtyShow.description_ru}
          </div>
          <br/>
        </div> 
        <div>
          <p><b>Карта</b></p> 
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

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(RealtyShow)