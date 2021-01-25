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

// Helpers
import { realtyLabels as l } from '../script'

let RealtyCreateForm = props => {
  const { handleSubmit, pristine, submitting, classes, handleRealtyCreate, formDataImages } = props

  const createBtn = useRef()
  useEffect(() => {     
    let listenerSaveKeydown = document.addEventListener('keydown', function(event) {
      if (event.key == 'Escape') {
        createBtn.current.click() 
      }     
    })
    return () => { 
      removeEventListener('keydown', listenerSaveKeydown) 
    }
  }, [])
  
  function submit(values) {     
    handleRealtyCreate(values, formDataImages)
  }

  return (
    <form className={FormCss.form} onSubmit={handleSubmit(submit)} encType="multipart/form-data">
      <div><Field name="name" label={l.name} component={renderTextField} /></div>
      <div>
        <Field name="visibility" label={l.visibility} classes={classes} component={renderSelectField}>     
          <option value={l.options.visibility.published}>{l.options.visibility.published}</option>          
          <option value={l.options.visibility.hidden}>{l.options.visibility.hidden}</option>         
        </Field>
      </div>
      <div><Field name="subname_ru" label={l.subname_ru} component={renderTextField} /></div>
      <div><Field name="subname_en" label={l.subname_en} component={renderTextField} /></div>
      <div>
        <Field name="type_ru" label={l.type_ru} classes={classes} component={renderSelectField}>          
          <option value={l.options.type.apartment}>
            {l.options.type.apartment}
          </option>          
          <option value={l.options.type.villa}>
            {l.options.type.villa}
          </option>         
        </Field>
      </div>
      <div>
        <Field name="type_en" label={l.type_en} classes={classes} component={renderSelectField}>          
          <option value={l.options.type.apartment}>
            {l.options.type.apartment}
          </option>          
          <option value={l.options.type.villa}>
            {l.options.type.villa}
          </option>         
        </Field>
      </div>
      <div><Field name="country_ru" label={l.country_ru} component={renderTextField} /></div>
      <div><Field name="country_en" label={l.country_en} component={renderTextField} /></div>
      <div><Field name="area_ru" label={l.area_ru} component={renderTextField} /></div>
      <div><Field name="area_en" label={l.area_en} component={renderTextField} /></div>
      <div><Field name="city_ru" label={l.city_ru} component={renderTextField} /></div>
      <div><Field name="city_en" label={l.city_en} component={renderTextField} /></div>
      <div><Field name="view_ru" label={l.view_ru} component={renderTextField} /></div>
      <div><Field name="view_en" label={l.view_en} component={renderTextField} /></div>
      <div><Field name="transfer_payment_ru" label={`${l.transfer_payment_ru}. Текстовое поле. Можно писать и текст`} component={renderTextField} /></div>
      <div><Field name="transfer_payment_en" label={`${l.transfer_payment_en}. Текстовое поле. Можно писать и текст`} component={renderTextField} /></div>
      <div><Field name="internet_payment_ru" label={`${l.internet_payment_ru}. Текстовое поле. Можно писать и текст`} component={renderTextField} /></div>
      <div><Field name="internet_payment_en" label={`${l.internet_payment_en}. Текстовое поле. Можно писать и текст`} component={renderTextField} /></div>
      <div><Field name="parking_payment_ru" label={`${l.parking_payment_ru}. Текстовое поле. Можно писать и текст`} component={renderTextField} /></div>
      <div><Field name="parking_payment_en" label={`${l.parking_payment_en}. Текстовое поле. Можно писать и текст`} component={renderTextField} /></div>
      <div>
        <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-animated MuiInputLabel-shrink MuiFormLabel-filled" data-shrink="true">
          {l.description_ru}
        </label>
        <Field name="description_ru" component={ReactMDE} placeholder={l.description_ru} />
      </div>
      <div>
        <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-animated MuiInputLabel-shrink MuiFormLabel-filled" data-shrink="true">
          {l.description_en}
        </label>
        <Field name={l.description_en} component={ReactMDE} placeholder={l.description_en} />
      </div>
      <div><Field name="map_html" label={l.map_html} component={renderTextField} /></div>
      <div><Field name="square" label={l.square} type="number" component={renderTextField} /></div>
      <div><Field name="bedrooms" label={l.bedrooms} type="number" component={renderTextField} /></div>
      <div><Field name="capacity" label={l.capacity} type="number" component={renderTextField} /></div>
      <div><Field name="price" label={l.price} type="number" component={renderTextField} /></div>
      <div><Field name="price_line_through" label={l.price_line_through} type="number" component={renderTextField} /></div>
      <div><Field name="price_jan" label={l.price_jan} type="number" component={renderTextField} /></div>
      <div><Field name="price_feb" label={l.price_feb} type="number" component={renderTextField} /></div>
      <div><Field name="price_mar" label={l.price_mar} type="number" component={renderTextField} /></div>
      <div><Field name="price_apr" label={l.price_apr} type="number" component={renderTextField} /></div>
      <div><Field name="price_may" label={l.price_may} type="number" component={renderTextField} /></div>
      <div><Field name="price_jun" label={l.price_jun} type="number" component={renderTextField} /></div>
      <div><Field name="price_jul" label={l.price_jul} type="number" component={renderTextField} /></div>
      <div><Field name="price_aug" label={l.price_aug} type="number" component={renderTextField} /></div>
      <div><Field name="price_sep" label={l.price_sep} type="number" component={renderTextField} /></div>
      <div><Field name="price_oct" label={l.price_oct} type="number" component={renderTextField} /></div>
      <div><Field name="price_nov" label={l.price_nov} type="number" component={renderTextField} /></div>
      <div><Field name="price_dec" label={l.price_dec} type="number" component={renderTextField} /></div>
      <div><Field name="price_oct_apr" label={l.price_oct_apr} type="number" component={renderTextField} /></div>
      <div>
        <Field 
          name="booking_mark" 
          label={l.booking_mark}           
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
      <div><Field name="dist_sea" label={l.dist_sea} type="number" component={renderTextField} /></div>
      <div><Field name="dist_tivat" label={l.dist_tivat} type="number" component={renderTextField} /></div>
      <div><Field name="dist_podg" label={l.dist_podg} type="number" component={renderTextField} /></div>
      <div><Field name="discount" label={l.discount} type="number" component={renderTextField} /></div>      
      <div className="mb-4">        
        <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-animated MuiInputLabel-shrink MuiFormLabel-filled" data-shrink="true">
          {l.main_image}
        </label>        
        <Field component={FileInput} name="main_image" imgType="main_image_create" multiple={false} />
      </div> 
      <div className="mb-4">        
        <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-animated MuiInputLabel-shrink MuiFormLabel-filled" data-shrink="true">
          {l.thumbnails}
        </label>        
        <Field component={FileInput} name="thumbnails" imgType="thumbnails_create" multiple={true}/>
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


RealtyCreateForm = reduxForm({
  form: 'createRealty',
  validate
})(RealtyCreateForm)


function mapStateToProps(state) {  
  return {
    formDataImages: state.formDataImages,
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
    handleRealtyCreate(values, formDataImages) {
      dispatch(realtyCreateAsync(values, formDataImages))
    },
  }
}


export default compose(connect(mapStateToProps, mapDispatchToProps)(RealtyCreateForm))
