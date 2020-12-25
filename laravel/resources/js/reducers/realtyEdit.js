const initialState = {
  name:'', 
  subname_ru:'',
  country_ru:'',           
  area_ru:'',              
  city_ru:'',
  type_ru:'',   
  visibility:'',              
  square:'',              
  bedrooms:'',             
  capacity:'',
  price:'',                
  price_line_through:'',  
  booking_mark:'',    
  view_ru:'',        
  dist_sea:'',             
  dist_tivat:'',           
  dist_podg:'',            
  transfer_payment_ru:'',        
  parking_payment_ru:'', 
  internet_payment_ru:'', 
  discount:'',       
  price_jan:'',            
  price_feb:'',            
  price_mar:'',            
  price_apr:'',            
  price_may:'',            
  price_jun:'',            
  price_jul:'',            
  price_aug:'',            
  price_sep:'',            
  price_oct:'',            
  price_nov:'',            
  price_dec:'',            
  price_oct_apr:'',
  description_ru: '',
  map_html:'',
}

export default function realtyEdit(state = initialState, action) {
  switch (action.type) {
    case 'GET_REALTY_EDIT':      
      return {
        name: action.name,
        subname_ru: action.subname_ru,
        type_ru: action.type_ru,
        country_ru: action.country_ru,
        area_ru: action.area_ru,
        city_ru: action.city_ru,
        visibility: action.visibility,
        square: action.square,
        bedrooms: action.bedrooms,             
        capacity: action.capacity,
        price: action.price,                
        price_line_through: action.price_line_through,  
        booking_mark: action.booking_mark,    
        view_ru: action.view_ru,        
        dist_sea: action.dist_sea,             
        dist_tivat: action.dist_tivat,           
        dist_podg: action.dist_podg,            
        transfer_payment_ru: action.transfer_payment_ru,
        parking_payment_ru: action.parking_payment_ru, 
        internet_payment_ru: action.internet_payment_ru, 
        discount: action.discount,       
        price_jan: action.price_jan,            
        price_feb: action.price_feb,            
        price_mar: action.price_mar,            
        price_apr: action.price_apr,            
        price_may: action.price_may,            
        price_jun: action.price_jun,            
        price_jul: action.price_jul,            
        price_aug: action.price_aug,            
        price_sep: action.price_sep,            
        price_oct: action.price_oct,            
        price_nov: action.price_nov,            
        price_dec: action.price_dec,            
        price_oct_apr: action.price_oct_apr,
        description_ru: action.description_ru,
        map_html: action.map_html 
      }
      
    default:
      return state  
  }
}



