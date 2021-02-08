// Libs
import React, { useEffect, useRef } from 'react';

// Helpers
import { realtyFields as f } from '../consts' 
import { getModelFieldsList } from '../script'

// Css
import FormCss from './css/Form.module.css'


export const validateRealtyForm = values => {
  const errors = {}
  const requiredFields = getModelFieldsList(f)

  requiredFields.forEach(field => {
    if (!values[field] && (field === 'description_ru' || field === 'description_en')) {
      errors[field] = eval(<span className={FormCss.error_text}>Описание — обязательное поле!</span>);
    } 
    else if (!values[field]) {
      errors[field] = 'Обязательное поле'
    }
  })   

  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) { 
    errors.email = 'Недействительный email'
  }
  if (String(values.booking_mark)[1] !== '.' || String(values.booking_mark).length > 3) {
    errors.booking_mark = "1 знак до запятой и 1 знак после запятой: 9.3 или 7.0. Разделитель - точка, а не запятая."
  }

  return errors
}