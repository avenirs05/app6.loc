import React, { useEffect, useRef } from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { NavLink } from "react-router-dom"

// React Bootstrap
import Button from 'react-bootstrap/Button'

// Material UI
import TextField from '@material-ui/core/TextField'
import Input from '@material-ui/core/Input';
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'

// Css Modules
import EditFormCss from './css/EditForm.module.css'

const validate = values => {
  const errors = {}
  const requiredFields = [
    'name',
    'subname_ru',
    'subname_en',    
    'type_ru',
    'type_en',
    'country_ru',
    'country_en',
    'area_ru',
    'area_en',
    'city_ru',
    'city_en',
    'square',
    'visibility',
    'bedrooms',
    'capacity',
    'price',
    'price_line_through',
    'booking_mark',
    'price_jan',
    'price_feb',
    'price_mar',
    'price_apr',
    'price_may',
    'price_jun',
    'price_jul',
    'price_aug',
    'price_sep',
    'price_oct',
    'price_nov',
    'price_dec',
    'price_oct_apr',
    'discount',
    'view_ru', 
    'view_en', 
    'dist_sea', 
    'dist_tivat', 
    'dist_podg', 
    'transfer_payment_ru', 
    'transfer_payment_en', 
    'internet_payment_ru',
    'internet_payment_en',    
    'map_html'
  ]

  requiredFields.forEach(field => {
    if (!values[field]) {
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


const renderTextField = ({
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


const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>
  }
}

const renderSelectField = ({
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

const toggleOption = (prop, first, second) => prop === first ? second : first 

  
let EditForm = props => {
  const saveBtn = useRef(null);

  useEffect(() => { 
    let listenerEnterKeydown = document.addEventListener('keydown', function(event) {
      event.code == 'Enter' ? saveBtn.current.click() : null      
    })
    return () => { removeEventListener('keydown', listenerEnterKeydown) }
  }, [])

  const { handleSubmit, pristine, submitting, classes, realtyEdit } = props

  return (
    <form className={EditFormCss.form} onSubmit={handleSubmit}>
      <div><Field name="name" label="Название" component={renderTextField} /></div>
      <div><Field name="subname_ru" label="Мини-описание" component={renderTextField} /></div>
      <div><Field name="subname_en" label="Мини-описание — English" component={renderTextField} /></div>
      <div>
        <Field name="type_ru" label="Тип объекта" classes={classes} component={renderSelectField}>          
          <option value={realtyEdit.type_ru}>{realtyEdit.type_ru}</option>          
          <option value={toggleOption(realtyEdit.type_ru, 'апартамент', 'вилла')}>
            {toggleOption(realtyEdit.type_ru, 'апартамент', 'вилла')}
          </option>         
        </Field>
      </div>
      <div>
        <Field name="type_en" label="Тип объекта — English" classes={classes} component={renderSelectField}>          
          <option value={realtyEdit.type_en}>{realtyEdit.type_en}</option>          
          <option value={toggleOption(realtyEdit.type_en, 'apartment', 'villa')}>
            {toggleOption(realtyEdit.type_en, 'apartment', 'villa')}
          </option>         
        </Field>
      </div>
      <div><Field name="square" label="Площадь (метров)" type="number" component={renderTextField} /></div>
      <div><Field name="country_ru" label="Страна" component={renderTextField} /></div>
      <div><Field name="country_en" label="Страна — English" component={renderTextField} /></div>
      <div><Field name="area_ru" label="Район" component={renderTextField} /></div>
      <div><Field name="area_en" label="Район — English" component={renderTextField} /></div>
      <div><Field name="city_ru" label="Город" component={renderTextField} /></div>
      <div><Field name="city_en" label="Город — English" component={renderTextField} /></div>
      <div>
        <Field name="visibility" label="Видимость" classes={classes} component={renderSelectField}>          
          <option value={realtyEdit.visibility}>{realtyEdit.visibility}</option>          
          <option value={toggleOption(realtyEdit.visibility, 'опубликовано', 'скрыто')}>
            {toggleOption(realtyEdit.visibility, 'опубликовано', 'скрыто')}
          </option>         
        </Field>
      </div>
      <div><Field name="bedrooms" label="Спален (количество)" type="number" component={renderTextField} /></div>
      <div><Field name="capacity" label="Вместимость (человек)" type="number" component={renderTextField} /></div>
      <div><Field name="price" label="Цена (€)" type="number" component={renderTextField} /></div>
      <div><Field name="price_line_through" label="Цена перечеркнутая (€)" type="number" component={renderTextField} /></div>
      <div><Field name="price_jan" label="Цена — Январь (€)" type="number" component={renderTextField} /></div>
      <div><Field name="price_feb" label="Цена — Февраль (€)" type="number" component={renderTextField} /></div>
      <div><Field name="price_mar" label="Цена — Март(€)" type="number" component={renderTextField} /></div>
      <div><Field name="price_apr" label="Цена — Апрель (€)" type="number" component={renderTextField} /></div>
      <div><Field name="price_may" label="Цена — Май (€)" type="number" component={renderTextField} /></div>
      <div><Field name="price_jun" label="Цена — Июнь (€)" type="number" component={renderTextField} /></div>
      <div><Field name="price_jul" label="Цена — Июль (€)" type="number" component={renderTextField} /></div>
      <div><Field name="price_aug" label="Цена — Август (€)" type="number" component={renderTextField} /></div>
      <div><Field name="price_sep" label="Цена — Сентябрь (€)" type="number" component={renderTextField} /></div>
      <div><Field name="price_oct" label="Цена — Октябрь (€)" type="number" component={renderTextField} /></div>
      <div><Field name="price_nov" label="Цена — Ноябрь (€)" type="number" component={renderTextField} /></div>
      <div><Field name="price_dec" label="Цена — Декабрь (€)" type="number" component={renderTextField} /></div>
      <div><Field name="price_oct_apr" label="Цена — Октябрь-Апрель (€)" type="number" component={renderTextField} /></div>
      <div><Field name="discount" label="Скидка (%). Не трогать. Оставить 1%, как сейчас." type="number" component={renderTextField} /></div>
      <div>
        <Field 
          name="booking_mark" 
          label="Букинг (оценка)" 
          type="number" 
          component={renderTextField} 
          InputProps={{
            inputProps: {
              step: 0.1,
              inputmode: "numeric"
            }
          }}
        />
      </div>
      <div><Field name="view_ru" label="Вид" component={renderTextField} /></div>
      <div><Field name="view_en" label="Вид — English" component={renderTextField} /></div>
      <div><Field name="dist_sea" label="Расстояние до моря (км)" type="number" component={renderTextField} /></div>
      <div><Field name="dist_tivat" label="Расстояние до аэропорта Тиват (км)" type="number" component={renderTextField} /></div>
      <div><Field name="dist_podg" label="Расстояние до аэропорта Подгорица (км)" type="number" component={renderTextField} /></div>

      <div><Field name="transfer_payment_ru" label="Трансфер. Текстовое поле. Можно писать и текст" component={renderTextField} /></div>
      <div><Field name="transfer_payment_en" label="Трансфер — English. Текстовое поле. Можно писать и текст" component={renderTextField} /></div>
      <div><Field name="internet_payment_ru" label="Интернет. Текстовое поле. Можно писать и текст" component={renderTextField} /></div>
      <div><Field name="internet_payment_en" label="Интернет — English. Текстовое поле. Можно писать и текст" component={renderTextField} /></div>
      
      <div><Field name="map_html" label="Карта (html-код)" component={renderTextField} /></div>

      <div>
        <Button ref={saveBtn} variant="primary" type="submit" disabled={pristine || submitting}>Сохранить</Button>
      </div>
    </form>
  )
}


EditForm = reduxForm({
  form: 'editRealty',
  validate
})(EditForm)


function mapStateToProps(state) {
  return {
    initialValues: state.realtyEdit,
    realtyEdit: state.realtyEdit,
    enableReinitialize: true,
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}


export default compose(connect(mapStateToProps, mapDispatchToProps)(EditForm))
