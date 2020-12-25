import { GET_REALTY_SHOW } from './consts';

export function getRealtyShow(id) {
  return function(dispatch) {  
    axios.get(route('realties.show', id))                   
         .then(response => {                
            return dispatch({ 
              type: GET_REALTY_SHOW, 
              name: response.data.name,
              subname_ru: response.data.subname_ru,
              type_ru: response.data.type_ru,
              country_ru: response.data.country_ru,
              area_ru: response.data.area_ru,
              city_ru: response.data.city_ru,
              visibility: response.data.visibility,
              square: response.data.square,
              bedrooms: response.data.bedrooms,             
              capacity: response.data.capacity,
              price: response.data.price,                
              price_line_through: response.data.price_line_through,  
              booking_mark: response.data.booking_mark,    
              view_ru: response.data.view_ru,        
              dist_sea: response.data.dist_sea,             
              dist_tivat: response.data.dist_tivat,           
              dist_podg: response.data.dist_podg,            
              transfer_payment_ru: response.data.transfer_payment_ru,
              internet_payment_ru: response.data.internet_payment_ru, 
              discount: response.data.discount,       
              price_jan: response.data.price_jan,            
              price_feb: response.data.price_feb,            
              price_mar: response.data.price_mar,            
              price_apr: response.data.price_apr,            
              price_may: response.data.price_may,            
              price_jun: response.data.price_jun,            
              price_jul: response.data.price_jul,            
              price_aug: response.data.price_aug,            
              price_sep: response.data.price_sep,            
              price_oct: response.data.price_oct,            
              price_nov: response.data.price_nov,            
              price_dec: response.data.price_dec,            
              price_oct_apr: response.data.price_oct_apr,
              description_ru: response.data.description_ru,
              map_html: response.data.map_html 
            })        
    })
  }
}
