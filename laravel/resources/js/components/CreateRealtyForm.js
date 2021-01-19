import React, { useEffect, useRef } from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import ReactMDE from 'redux-forms-markdown-editor'

// React Bootstrap
import Button from 'react-bootstrap/Button'

// Actions
import { realtyCreateAsync } from '../actions/realtyCreateAsync'

// Components
import FileInput from './FileInput';

// Helpers
import { validate, 
  renderTextField,  
  renderSelectField } from './formHelpers'

// Css Modules
import FormCss from './css/Form.module.css'


let CreateRealtyForm = props => {
  const { handleSubmit, pristine, submitting, classes, onRealtyCreate, fileList } = props

  const createBtn = useRef()
  useEffect(() => {     
    let listenerSaveKeydown = document.addEventListener('keydown', function(event) {
      if (event.key == 'Escape') {
        createBtn.current.click() 
      }     
    })
    return () => { removeEventListener('keydown', listenerSaveKeydown) }
  }, [])
  
  function submit(values) {  
    onRealtyCreate(values, fileList)
  }

  return (
    <form className={FormCss.form} onSubmit={handleSubmit(submit)} encType="multipart/form-data">
      <div><Field name="name" label="Название" component={renderTextField} /></div>
      <div>
        <Field name="visibility" label="Видимость" classes={classes} component={renderSelectField}>     
          <option value="опубликовано">Опубликовано</option>          
          <option value="скрыто">Скрыто</option>         
        </Field>
      </div>
      <div><Field name="subname_ru" label="Мини-описание" component={renderTextField} /></div>
      <div><Field name="subname_en" label="Мини-описание — English" component={renderTextField} /></div>
      <div>
        <Field name="type_ru" label="Тип объекта" classes={classes} component={renderSelectField}>          
          <option value="апартамент">апартамент</option>          
          <option value="вилла">вилла</option>         
        </Field>
      </div>
      <div>
        <Field name="type_en" label="Тип объекта — English" classes={classes} component={renderSelectField}>          
          <option value="apartment">apartment</option>          
          <option value="villa">villa</option>         
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
        <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-animated MuiInputLabel-shrink MuiFormLabel-filled" data-shrink="true">
          Подробное описание
        </label>
        <Field name="description_ru" component={ReactMDE} placeholder="Описание подробное" />
      </div>
      <div>
        <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-animated MuiInputLabel-shrink MuiFormLabel-filled" data-shrink="true">
          Подробное описание — English
        </label>
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
        <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-animated MuiInputLabel-shrink MuiFormLabel-filled" data-shrink="true">
            Главное изображение
        </label>        
        <Field component={FileInput} name="main_image" imgType="main" multiple={false} />
      </div> 
      <div className="mb-4">        
        <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-animated MuiInputLabel-shrink MuiFormLabel-filled" data-shrink="true">
            Изображения галереи
        </label>        
        <Field component={FileInput} name="images" imgType="thumbnail" multiple={true}/>
      </div>        
      <div>
        <Button className="mb-4" 
                ref={createBtn} 
                variant="primary" 
                type="submit"                 
                disabled={pristine || submitting}>
                Создать
        </Button>
      </div>
    </form>
  )
}


CreateRealtyForm = reduxForm({
  form: 'createRealty',
  validate
})(CreateRealtyForm)


function mapStateToProps(state) {  
  return {
    fileList: state.fileList,
    initialValues: {
      visibility: 'опубликовано',
      subname_ru: 'subname_ru',
      subname_en: 'subname_en',
      type_ru: 'апартамент',
      type_en: 'apartment',
      country_ru: 'Черногория',
      country_en: 'Montenegro',
      area_ru: 'Будванская ривьера',
      area_en: 'Budva Riviera',
      city_ru: 'Будва',
      city_en: 'Budva',
      view_ru: 'на море',
      view_en: 'sea',
      transfer_payment_ru: 'бесплатный',
      transfer_payment_en: 'free',
      internet_payment_ru: 'бесплатный',
      internet_payment_en: 'free',
      parking_payment_ru: 'бесплатный',
      parking_payment_en: 'free',
      description_ru: 'description_ru',   
      description_en: 'description_en',   
      map_html: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2951.3632492036777!2d18.867321315101165!3d42.292113947382965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDE3JzMxLjYiTiAxOMKwNTInMTAuMiJF!5e0!3m2!1sru!2sru!4v1507902217396" width="100%" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>',
      square: 10,
      bedrooms: 11,
      capacity: 12,
      price: 13,
      price_line_through: 14,
      price_jan: 15,
      price_feb: 16,
      price_mar: 17,
      price_apr: 18,
      price_may: 19,
      price_jun: 20,
      price_jul: 21,
      price_aug: 22,
      price_sep: 23,
      price_oct: 24,
      price_nov: 25,
      price_dec: 26,
      price_oct_apr: 27,
      booking_mark: 7.1,
      dist_sea: 28,
      dist_tivat: 29,
      dist_podg: 30,
      discount: 1,
    },
    enableReinitialize: true,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onRealtyCreate(values, fileList) {
      dispatch(realtyCreateAsync(values, fileList))
    },
  }
}


export default compose(connect(mapStateToProps, mapDispatchToProps)(CreateRealtyForm))
