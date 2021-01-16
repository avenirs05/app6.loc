import React, { useEffect, useRef } from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import ReactMDE from 'redux-forms-markdown-editor'

// React Bootstrap
import Button from 'react-bootstrap/Button'

// Css Modules
import FormCss from './css/Form.module.css'

// Components
import FileInput from './FileInput';

// Helpers
import { validate, 
         renderTextField,  
         renderSelectField,
         toggleOption } from './formHelpers'


let EditRealtyForm = props => {
  const { handleSubmit, pristine, submitting, classes, realtyEdit, fileList } = props
  
  const updateBtn = useRef()
  useEffect(() => {     
    let listenerSaveKeydown = document.addEventListener('keydown', function(event) {
      if (event.key == 'Escape') { 
        updateBtn.current.click()
      }      
    })
    return () => { removeEventListener('keydown', listenerSaveKeydown) }
  }, [])
  

  return (
    <form className={FormCss.form} onSubmit={handleSubmit}>
      <div><Field name="name" label="Название" component={renderTextField} /></div>
      <div>
        <Field name="visibility" label="Видимость" classes={classes} component={renderSelectField}>          
          <option value={realtyEdit.visibility}>{realtyEdit.visibility}</option>          
          <option value={toggleOption(realtyEdit.visibility, 'опубликовано', 'скрыто')}>
            {toggleOption(realtyEdit.visibility, 'опубликовано', 'скрыто')}
          </option>         
        </Field>
      </div>
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
      <div><Field name="country_ru" label="Страна" component={renderTextField} /></div>
      <div><Field name="country_en" label="Страна — English" component={renderTextField} /></div>
      <div><Field name="area_ru" label="Район" component={renderTextField} /></div>
      <div><Field name="area_en" label="Район — English" component={renderTextField} /></div>
      <div><Field name="city_ru" label="Город" component={renderTextField} /></div>
      <div><Field name="city_en" label="Город — English" component={renderTextField} /></div>
      <div><Field name="view_ru" label="Вид" component={renderTextField} /></div>
      <div><Field name="view_en" label="Вид — English" component={renderTextField} /></div>
      <div><Field name="transfer_payment_ru" label="Трансфер. Текстовое поле. Можно писать и текст" component={renderTextField} /></div>
      <div><Field name="transfer_payment_en" label="Трансфер — English. Текстовое поле. Можно писать и текст" component={renderTextField} /></div>
      <div><Field name="internet_payment_ru" label="Интернет. Текстовое поле. Можно писать и текст" component={renderTextField} /></div>
      <div><Field name="internet_payment_en" label="Интернет — English. Текстовое поле. Можно писать и текст" component={renderTextField} /></div>
      <div><Field name="parking_payment_ru" label="Паркинг. Текстовое поле. Можно писать и текст" component={renderTextField} /></div>
      <div><Field name="parking_payment_en" label="Паркинг — English. Текстовое поле. Можно писать и текст" component={renderTextField} /></div>
      <div>
        <label>Описание подробное</label>
        <Field name="description_ru" component={ReactMDE} placeholder="Описание подробное" />
      </div>
      <div>
        <label>Описание подробное — English</label>
        <Field name="description_en" component={ReactMDE} placeholder="Описание подробное — English" />
      </div>
      <div><Field name="map_html" label="Карта (html-код)" component={renderTextField} /></div>
      <div><Field name="square" label="Площадь (метров)" type="number" component={renderTextField} /></div>
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
      <div>
        <Field 
          name="booking_mark" 
          label="Букинг (оценка)"           
          component={renderTextField} 
          InputProps={{
            inputProps: {
              step: 0.1,
              inputMode: "numeric",
              type: "number"
            }
          }}
        />
      </div>
      <div><Field name="dist_sea" label="Расстояние до моря (км)" type="number" component={renderTextField} /></div>
      <div><Field name="dist_tivat" label="Расстояние до аэропорта Тиват (км)" type="number" component={renderTextField} /></div>
      <div><Field name="dist_podg" label="Расстояние до аэропорта Подгорица (км)" type="number" component={renderTextField} /></div>
      <div><Field name="discount" label="Скидка (%). Не трогать. Оставить 1%, как сейчас." type="number" component={renderTextField} /></div>      
      <div className="mb-4">
        <div>
          <label htmlFor="images">Изображения галереи</label>
        </div>
        <Field component={FileInput} name="images" />
      </div> 
      <div>
        <Button ref={updateBtn} variant="primary" type="submit" disabled={pristine || submitting}>Сохранить</Button>
      </div>
    </form>
  )
}


EditRealtyForm = reduxForm({
  form: 'EditRealtyForm',
  validate
})(EditRealtyForm)


function mapStateToProps(state) {  
  return {
    initialValues: state.realtyEdit,
    enableReinitialize: true,
    realtyEdit: state.realtyEdit,    
    fileList: state.fileList,
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}


export default compose(connect(mapStateToProps, mapDispatchToProps)(EditRealtyForm))