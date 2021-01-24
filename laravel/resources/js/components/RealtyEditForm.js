import React, { useEffect, useRef } from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import ReactMDE from 'redux-forms-markdown-editor'

// React Bootstrap
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

// Css Modules
import FormCss from './css/Form.module.css'

// Components
import FileInput from './FileInput'

// Actions
import { realtyUpdateAsync } from '../actions/realtyUpdateAsync'

// Icons
import HighlightOffIcon from '@material-ui/icons/HighlightOff'

// Helpers
import { realtyLabels as l } from '../script'
import { validate, 
         renderTextField,  
         renderSelectField,
         toggleOption } from './formHelpers'



let RealtyEditForm = props => {
  const { handleSubmit, 
          pristine, 
          submitting, 
          classes, 
          realtyEdit, 
          handleRealtyUpdate, 
          formDataImages } = props
  
  const updateBtn = useRef()
  useEffect(() => {     
    let listenerSaveKeydown = document.addEventListener('keydown', function(event) {
      if (event.key == 'Escape') { 
        updateBtn.current.click()
      }      
    })
    return () => { removeEventListener('keydown', listenerSaveKeydown) }
  }, [])

 
  const getMainImagePath = (realtyId, images) => {
    const basePath = '/storage/uploads/realties'    
    const mainImage = img => img.type === 'main'    
    const mainImageName = images.find(mainImage)
    
    if (mainImageName) {
      return `${basePath}/${realtyId}/${mainImageName.name}`
    } else return '/images/no-photo.jpg'      
  }

  const submit = values => {
    handleRealtyUpdate(values)    
  }

  return (
    <form className={FormCss.form} onSubmit={handleSubmit(submit)} encType="multipart/form-data">
      <div><Field name="name" label={l.name} component={renderTextField} /></div>
      <div>
        <Field name="visibility" label={l.visibility} classes={classes} component={renderSelectField}>          
          <option value={realtyEdit.visibility}>{realtyEdit.visibility}</option>          
          <option value={toggleOption(realtyEdit.visibility, l.options.visibility.published, l.options.visibility.hidden)}>
            {toggleOption(realtyEdit.visibility, l.options.visibility.published, l.options.visibility.hidden)}
          </option>         
        </Field>
      </div>
      <div><Field name="subname_ru" label={l.subname_ru} component={renderTextField} /></div>
      <div><Field name="subname_en" label={l.subname_en} component={renderTextField} /></div>
      <div>
        <Field name="type_ru" label={l.type_ru} classes={classes} component={renderSelectField}>          
          <option value={realtyEdit.type_ru}>{realtyEdit.type_ru}</option>          
          <option value={toggleOption(realtyEdit.type_ru, l.options.type.apartment, l.options.type.villa)}>
            {toggleOption(realtyEdit.type_ru, l.options.type.apartment, l.options.type.villa)}
          </option>         
        </Field>
      </div>
      <div>
        <Field name="type_en" label={l.type_en} classes={classes} component={renderSelectField}>          
          <option value={realtyEdit.type_en}>{realtyEdit.type_en}</option>          
          <option value={toggleOption(realtyEdit.type_en, l.options.type.apartment, l.options.type.villa)}>
            {toggleOption(realtyEdit.type_en, l.options.type.apartment, l.options.type.villa)}
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
      <div><Field name="transfer_payment_ru" label={l.transfer_payment_ru} component={renderTextField} /></div>
      <div><Field name="transfer_payment_en" label={l.transfer_payment_en} component={renderTextField} /></div>
      <div><Field name="internet_payment_ru" label={l.internet_payment_ru} component={renderTextField} /></div>
      <div><Field name="internet_payment_en" label={l.internet_payment_en} component={renderTextField} /></div>
      <div><Field name="parking_payment_ru" label={l.parking_payment_ru} component={renderTextField} /></div>
      <div><Field name="parking_payment_en" label={l.parking_payment_en} component={renderTextField} /></div>
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
        <Field name="description_en" component={ReactMDE} placeholder={l.description_en} />
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
        <div>
          { typeof realtyEdit.images !== 'undefined' ?    
            <>                
              <Image 
                width="300"
                height="200"
                rounded
                src={ getMainImagePath(realtyEdit.id, realtyEdit.images) } 
                alt="" /> 
            </> :
            null 
          }              
        </div>    
        <Field component={FileInput} name="main_image" imgType="main_image" multiple={false} />
      </div> 
      <div className="mb-4">        
        <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-animated MuiInputLabel-shrink MuiFormLabel-filled" data-shrink="true">
          {l.thumbnails}
        </label>        
        <div>
            { 
              typeof realtyEdit.images !== 'undefined' ?   
              realtyEdit.images.map((image, index) => {  
                if (image.type === 'thumbnail') {
                  return (
                    <div key={index} className={`${FormCss.thumb_wrapper} mr-2`}> 
                      <HighlightOffIcon color="primary" className={FormCss.delete_thumb_icon}></HighlightOffIcon>          
                      <Image                     
                      width="200"
                      height="150"
                      thumbnail
                      src={`/storage/uploads/realties/${realtyEdit.id}/${image.name}`} 
                      alt=""/> 
                    </div> 
                  )
                }
              }) :         
              null 
            }              
        </div> 
        <Field component={FileInput} name="thumbnails" imgType="thumbnails" multiple={true} />
      </div> 
      <div>
        <Button ref={updateBtn} variant="primary" type="submit" disabled={pristine || submitting}>Сохранить</Button>
      </div>
    </form>
  )
}


RealtyEditForm = reduxForm({
  form: 'RealtyEditForm',
  validate
})(RealtyEditForm)


function mapStateToProps(state) {  
  return {
    initialValues: state.realtyEdit,
    enableReinitialize: true,
    realtyEdit: state.realtyEdit,   
    formDataImages: state.formDataImages, 
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleRealtyUpdate(values) {    
      dispatch(realtyUpdateAsync(values))      
    },
  }
}


export default compose(connect(mapStateToProps, mapDispatchToProps)(RealtyEditForm))