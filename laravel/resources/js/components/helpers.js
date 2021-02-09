// Libs
import React from 'react'

const validateEmail = (values, errors) => {
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) { 
    errors.email = 'Недействительный email'
  }
}


export const validate = resource => values => {
  const errors = {}
  const errorStyle = {
    color: '#f44336', 
    fontSize: '0.75rem', 
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif'
  }

  switch (resource) {      
    case 'realty':     
      Object.keys(values).forEach(field => {
        if (!values[field] && (field === 'description_ru' || field === 'description_en')) {
          errors[field] = eval(<span style={errorStyle}>Описание — обязательное поле!</span>);
        } 
        else if (!values[field]) {
          errors[field] = 'Обязательное поле'
        }
      }) 
      if (String(values.booking_mark)[1] !== '.' || String(values.booking_mark).length > 3) {
        errors.booking_mark = "1 знак до запятой и 1 знак после запятой: 9.3 или 7.0. Разделитель - точка, а не запятая."
      }        
      return errors

    case 'feedback':  
      Object.keys(values).forEach(field => {
        if (!values[field]) {
          errors[field] = eval(<span style={errorStyle}>Обязательное поле!</span>)
        }
      }) 
      return errors

    default: 
      return errors
  }
}