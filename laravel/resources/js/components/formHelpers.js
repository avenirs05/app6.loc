import React from 'react';
import { allRealtyDbFields } from '../script'

// Material UI
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'

// Css Modules
import FormCss from './css/Form.module.css'

export const validate = values => {
  const errors = {}
  const requiredFields = allRealtyDbFields
 
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


export const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
    <TextField
      fullWidth
      label={label}
      placeholder={label}
      error={touched && invalid}
      helperText={touched && error} 
      {...input}
      {...custom}
    />
  )

export const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>
  }
}

export const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <FormControl error={touched && error} fullWidth>
    <InputLabel htmlFor={input.name}>{label}</InputLabel>
    <Select    
      style={{ backgroundColor: '#eeeeee' }}    
      native
      {...input}
      {...custom}
      inputProps={{
        name: input.name,
        id: input.name
      }}
    >
      {children}
    </Select>
    {renderFromHelper({ touched, error })}
  </FormControl>
)  

export const toggleOption = (prop, first, second) => prop === first ? second : first 