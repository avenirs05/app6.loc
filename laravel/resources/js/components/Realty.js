// React, Redux, Router 
import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { NavLink, useParams, withRouter } from "react-router-dom"

// React Bootstrap
import Button from 'react-bootstrap/Button'

// Actions
import { getRealty } from '../actions/getRealty'


// Css Modules

class Realty extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.onGetRealty(this.props.match.params.id)
  }

  render() {
    return (      
      <>
        <NavLink to="/realties">
         <Button variant="secondary" className="mr-2 mt-3 mb-3">Назад</Button>
        </NavLink> 
        <p><b>Название объекта:</b> {this.props.realty.name}</p> 
        <p><b>Описание краткое:</b> {this.props.realty.subname_ru}</p> 
        <p><b>Тип:</b> {this.props.realty.type_ru}</p> 
        <p><b>Страна:</b> {this.props.realty.country_ru}</p> 
        <p><b>Район:</b> {this.props.realty.area_ru}</p> 
        <p><b>Город:</b> {this.props.realty.city_ru}</p>        
        <p><b>Видимость:</b> {this.props.realty.visibility}</p> 
        <p><b>Площадь:</b> {this.props.realty.square} м<sup>2</sup></p> 
        <p><b>Спален:</b> {this.props.realty.bedrooms}</p> 
        <p><b>Вместимость, человек:</b> {this.props.realty.capacity}</p> 
        <p><b>Цена:</b> {this.props.realty.price}€</p> 
        <p><b>Цена перечеркнутая:</b> {this.props.realty.price_line_through}€</p> 
        <p><b>Букинг (оценка):</b> {this.props.realty.booking_mark}</p> 
        <p><b>Вид:</b> {this.props.realty.view_ru}</p> 
        <p><b>До моря, метров:</b> {this.props.realty.dist_sea}</p> 
        <p><b>До аэропорта Тиват:</b> {this.props.realty.dist_tivat}</p> 
        <p><b>До аэропорта Подгорица:</b> {this.props.realty.dist_podg}</p> 
        <p><b>Трансфер:</b> {this.props.realty.transfer_payment_ru}</p> 

        <p><b>Интернет:</b> {this.props.realty.internet_payment_ru}</p>
        <p><b>Скидка:</b> {this.props.realty.discount}</p>
        <p><b>Цена январь:</b> {this.props.realty.price_jan}</p>
        <p><b>Цена февраль:</b> {this.props.realty.price_feb}</p>
        <p><b>Цена март:</b> {this.props.realty.price_mar}</p>
        <p><b>Цена апрель:</b> {this.props.realty.price_apr}</p>
        <p><b>Цена май:</b> {this.props.realty.price_may}</p>
        <p><b>Цена июнь:</b> {this.props.realty.price_jun}</p>
        <p><b>Цена июль:</b> {this.props.realty.price_jul}</p>
        <p><b>Цена август:</b> {this.props.realty.price_aug}</p>
        <p><b>Цена сентябрь:</b> {this.props.realty.price_sep}</p>
        <p><b>Цена октябрь:</b> {this.props.realty.price_oct}</p>
        <p><b>Цена ноябрь:</b> {this.props.realty.price_nov}</p>
        <p><b>Цена декабрь:</b> {this.props.realty.price_dec}</p>
        <p><b>Цена октябрь - апрель:</b> {this.props.realty.price_oct_apr}</p>
        <div><b>Карта</b> 
          <div style={{overflowWrap: 'break-word'}}>
            {this.props.realty.map_html}
          </div>          
        </div>
        <NavLink to="/realties">
         <Button variant="secondary" className="mr-2 mt-3">Назад</Button>
       </NavLink> 
      </>
    )
  }
}  

// function Realty() {
//   function onGetResource(e, id) {
//     e.preventDefault()
//     onGetRealty(id)
//   }
  
//   let { id } = useParams() 
  
//   return (
//     <>     
//       <p>{id}</p>  
//       <NavLink to="/realties">
//         <Button variant="secondary" className="mr-2">Назад</Button>
//       </NavLink> 
//     </>
//   )
// }

function mapStateToProps(state) {
  return {
    realty: state.realty,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onGetRealty(id) {
      dispatch(getRealty(id))
    },
  }
}

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(Realty)