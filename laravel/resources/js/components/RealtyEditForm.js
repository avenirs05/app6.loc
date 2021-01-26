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
import { realtyFields as f } from '../consts'
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
          handleRealtyUpdate, } = props
  
  const updateBtn = useRef()
  useEffect(() => {     
    let listenerSaveKeydown = document.addEventListener('keydown', function(event) {
      if (event.key == 'Escape') { 
        updateBtn.current.click()
      }      
    })
    return () => { removeEventListener('keydown', listenerSaveKeydown) }
  }, [])

 
  const getMainImagePath = images => {
    const noPhotoPath = '/images/no-photo.jpg'
    const mainImage = img => img.type === 'main'    
    const mainImageName = images.find(mainImage)        
    return mainImageName ? `storage/${mainImageName.name}` : noPhotoPath      
  }

  const submit = values => {
    handleRealtyUpdate(values)    
  }

  return (
    <form className={FormCss.form} onSubmit={handleSubmit(submit)} encType="multipart/form-data">
      <div><Field name="name" label={f.name.label} component={renderTextField} /></div>
      <div>
        <Field name="visibility" label={f.visibility.label} classes={classes} component={renderSelectField}>          
          <option value={realtyEdit.visibility}>{realtyEdit.visibility}</option>          
          <option value={toggleOption(realtyEdit.visibility, l.options.visibility.published, l.options.visibility.hidden)}>
            {toggleOption(realtyEdit.visibility, l.options.visibility.published, l.options.visibility.hidden)}
          </option>         
        </Field>
      </div>
      <div><Field name="subname_ru" label={f.subname_ru.label} component={renderTextField} /></div>
      <div><Field name="subname_en" label={f.subname_en.label} component={renderTextField} /></div>
      <div>
        <Field name="type_ru" label={f.type_ru.label} classes={classes} component={renderSelectField}>          
          <option value={realtyEdit.type_ru}>{realtyEdit.type_ru}</option>          
          <option value={toggleOption(realtyEdit.type_ru, f.type_ru.options.apartment, f.type_ru.options.villa)}>
            {toggleOption(realtyEdit.type_ru, f.type_ru.options.apartment, f.type_ru.options.villa)}
          </option>         
        </Field>
      </div>
      <div>
        <Field name="type_en" label={f.type_en.label} classes={classes} component={renderSelectField}>          
          <option value={realtyEdit.type_en}>{realtyEdit.type_en}</option>          
          <option value={toggleOption(realtyEdit.type_en, f.type_en.options.apartment, f.type_en.options.villa)}>
            {toggleOption(realtyEdit.type_en, f.type_en.options.apartment, f.type_en.options.villa)}
          </option>         
        </Field>
      </div>
      <div><Field name="country_ru" label={f.country_ru.label} component={renderTextField} /></div>
      <div><Field name="country_en" label={f.country_en.label} component={renderTextField} /></div>
      <div><Field name="area_ru" label={f.area_ru.label} component={renderTextField} /></div>
      <div><Field name="area_en" label={f.area_en.label} component={renderTextField} /></div>
      <div><Field name="city_ru" label={f.city_ru.label} component={renderTextField} /></div>
      <div><Field name="city_en" label={f.city_en.label} component={renderTextField} /></div>
      <div><Field name="view_ru" label={f.view_ru.label} component={renderTextField} /></div>
      <div><Field name="view_en" label={f.view_en.label} component={renderTextField} /></div>
      <div><Field name="transfer_payment_ru" label={f.transfer_payment_ru.label} component={renderTextField} /></div>
      <div><Field name="transfer_payment_en" label={f.transfer_payment_en.label} component={renderTextField} /></div>
      <div><Field name="internet_payment_ru" label={f.internet_payment_ru.label} component={renderTextField} /></div>
      <div><Field name="internet_payment_en" label={f.internet_payment_en.label} component={renderTextField} /></div>
      <div><Field name="parking_payment_ru" label={f.parking_payment_ru.label} component={renderTextField} /></div>
      <div><Field name="parking_payment_en" label={f.parking_payment_en.label} component={renderTextField} /></div>
      <div>
        <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-animated MuiInputLabel-shrink MuiFormLabel-filled" data-shrink="true">
          {f.description_ru.label}
        </label>
        <Field name="description_ru" component={ReactMDE} placeholder={f.description_ru.label} />
      </div>
      <div>
        <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-animated MuiInputLabel-shrink MuiFormLabel-filled" data-shrink="true">
          {f.description_en.label}
        </label>
        <Field name="description_en" component={ReactMDE} placeholder={f.description_en.label} />
      </div>
      <div><Field name="map_html" label={f.map_html.label} component={renderTextField} /></div>
      <div><Field name="square" label={f.square.label} type="number" component={renderTextField} /></div>
      <div><Field name="bedrooms" label={f.bedrooms.label} type="number" component={renderTextField} /></div>
      <div><Field name="capacity" label={f.capacity.label} type="number" component={renderTextField} /></div>
      <div><Field name="price" label={f.price.label} type="number" component={renderTextField} /></div>
      <div><Field name="price_line_through" label={f.price_line_through.label} type="number" component={renderTextField} /></div>
      <div><Field name="price_jan" label={f.price_jan.label} type="number" component={renderTextField} /></div>
      <div><Field name="price_feb" label={f.price_feb.label} type="number" component={renderTextField} /></div>
      <div><Field name="price_mar" label={f.price_mar.label} type="number" component={renderTextField} /></div>
      <div><Field name="price_apr" label={f.price_apr.label} type="number" component={renderTextField} /></div>
      <div><Field name="price_may" label={f.price_may.label} type="number" component={renderTextField} /></div>
      <div><Field name="price_jun" label={f.price_jun.label} type="number" component={renderTextField} /></div>
      <div><Field name="price_jul" label={f.price_jul.label} type="number" component={renderTextField} /></div>
      <div><Field name="price_aug" label={f.price_aug.label} type="number" component={renderTextField} /></div>
      <div><Field name="price_sep" label={f.price_sep.label} type="number" component={renderTextField} /></div>
      <div><Field name="price_oct" label={f.price_oct.label} type="number" component={renderTextField} /></div>
      <div><Field name="price_nov" label={f.price_nov.label} type="number" component={renderTextField} /></div>
      <div><Field name="price_dec" label={f.price_dec.label} type="number" component={renderTextField} /></div>
      <div><Field name="price_oct_apr" label={f.price_oct_apr.label} type="number" component={renderTextField} /></div>
      <div>
        <Field 
          name="booking_mark" 
          label={f.booking_mark.label}           
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
      <div><Field name="dist_sea" label={f.dist_sea.label} type="number" component={renderTextField} /></div>
      <div><Field name="dist_tivat" label={f.dist_tivat.label} type="number" component={renderTextField} /></div>
      <div><Field name="dist_podg" label={f.dist_podg.label} type="number" component={renderTextField} /></div>
      <div><Field name="discount" label={f.discount.label} type="number" component={renderTextField} /></div>      
      <div className="mb-4">  
        <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-animated MuiInputLabel-shrink MuiFormLabel-filled" data-shrink="true">
          {f.main_image.label}
        </label>   
        <div>
          { typeof realtyEdit.images !== 'undefined' ?    
            <>                
              <Image 
                width="300"
                height="200"
                rounded
                src={getMainImagePath(realtyEdit.images)} 
                alt="" /> 
            </> :
            null 
          }              
        </div>    
        <Field component={FileInput} name="main_image" imgType="main_image_change" multiple={false} />
      </div> 
      <div className="mb-4">        
        <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-animated MuiInputLabel-shrink MuiFormLabel-filled" data-shrink="true">
          {f.thumbnails.label}
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
                      src={`storage/${image.name}`} 
                      alt=""/> 
                    </div> 
                  )
                }
              }) :         
              null 
            }              
        </div> 
        <Field component={FileInput} name="thumbnails" imgType="thumbnails_add" multiple={true} />
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