// Libs
import React from 'react';
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
import { thumbnailDeleteAsync } from '../actions/thumbnailDeleteAsync'

// Icons
import HighlightOffIcon from '@material-ui/icons/HighlightOff'

// Helpers
import { realtyFields as f, muiFormLabelClass } from '../consts'
import { renderTextField,  
         renderSelectField,
         toggleOption } from './formHelpers'
import { validate } from './helpers' 

// Hooks
import { useClickByHotKey } from './hooks'

let RealtyEditForm = props => {
  const { handleSubmit, 
          pristine, 
          submitting, 
          classes, 
          realtyEdit, 
          handleRealtyUpdate,
          thumbnailDelete } = props
  
  const updateBtn = useClickByHotKey('keydown', 'Escape')
 
  const getMainImagePath = images => {
    const noPhotoPath = '/images/no-photo.jpg'
    const mainImage = img => img.type === 'main'    
    const mainImageName = images.find(mainImage)        
    return mainImageName ? `storage/${mainImageName.name}` : noPhotoPath      
  }

  const submit = values => {
    handleRealtyUpdate(values)    
  }

  const onDeleteThumbnail = (e, thumbnail) => {
    thumbnailDelete(thumbnail)      
  }

  return (
    <form className={FormCss.form} onSubmit={handleSubmit(submit)} encType="multipart/form-data">
      <div><Field name={f.name.name} label={f.name.label} component={renderTextField} /></div>
      <div>
        <Field name={f.visibility.name} label={f.visibility.label} classes={classes} component={renderSelectField}>          
          <option value={realtyEdit.visibility}>{realtyEdit.visibility}</option>          
          <option value={toggleOption(realtyEdit.visibility, f.visibility.options.published, f.visibility.options.hidden)}>
            {toggleOption(realtyEdit.visibility, f.visibility.options.published, f.visibility.options.hidden)}
          </option>         
        </Field>
      </div>
      <div><Field name={f.subname_ru.name} label={f.subname_ru.label} component={renderTextField} /></div>
      <div><Field name={f.subname_en.name} label={f.subname_en.label} component={renderTextField} /></div>
      <div>
        <Field name={f.type_ru.name} label={f.type_ru.label} classes={classes} component={renderSelectField}>          
          <option value={realtyEdit.type_ru}>{realtyEdit.type_ru}</option>          
          <option value={toggleOption(realtyEdit.type_ru, f.type_ru.options.apartment, f.type_ru.options.villa)}>
            {toggleOption(realtyEdit.type_ru, f.type_ru.options.apartment, f.type_ru.options.villa)}
          </option>         
        </Field>
      </div>
      <div>
        <Field name={f.type_en.name} label={f.type_en.label} classes={classes} component={renderSelectField}>          
          <option value={realtyEdit.type_en}>{realtyEdit.type_en}</option>          
          <option value={toggleOption(realtyEdit.type_en, f.type_en.options.apartment, f.type_en.options.villa)}>
            {toggleOption(realtyEdit.type_en, f.type_en.options.apartment, f.type_en.options.villa)}
          </option>         
        </Field>
      </div>
      <div><Field name={f.country_ru.name} label={f.country_ru.label} component={renderTextField} /></div>
      <div><Field name={f.country_en.name} label={f.country_en.label} component={renderTextField} /></div>
      <div><Field name={f.area_ru.name} label={f.area_ru.label} component={renderTextField} /></div>
      <div><Field name={f.area_en.name} label={f.area_en.label} component={renderTextField} /></div>
      <div><Field name={f.city_ru.name} label={f.city_ru.label} component={renderTextField} /></div>
      <div><Field name={f.city_en.name} label={f.city_en.label} component={renderTextField} /></div>
      <div><Field name={f.view_ru.name} label={f.view_ru.label} component={renderTextField} /></div>
      <div><Field name={f.view_en.name} label={f.view_en.label} component={renderTextField} /></div>
      <div><Field name={f.transfer_payment_ru.name} label={f.transfer_payment_ru.label} component={renderTextField} /></div>
      <div><Field name={f.transfer_payment_en.name} label={f.transfer_payment_en.label} component={renderTextField} /></div>
      <div><Field name={f.internet_payment_ru.name} label={f.internet_payment_ru.label} component={renderTextField} /></div>
      <div><Field name={f.internet_payment_en.name} label={f.internet_payment_en.label} component={renderTextField} /></div>
      <div><Field name={f.parking_payment_ru.name} label={f.parking_payment_ru.label} component={renderTextField} /></div>
      <div><Field name={f.parking_payment_en.name} label={f.parking_payment_en.label} component={renderTextField} /></div>
      <div>
        <label className={muiFormLabelClass} data-shrink="true">
          {f.description_ru.label}
        </label>
        <Field name={f.description_ru.name} component={ReactMDE} placeholder={f.description_ru.label} />
      </div>
      <div>
        <label className={muiFormLabelClass} data-shrink="true">
          {f.description_en.label}
        </label>
        <Field name={f.description_en.name} component={ReactMDE} placeholder={f.description_en.label} />
      </div>
      <div><Field name={f.map_html.name} label={f.map_html.label} component={renderTextField} /></div>
      <div><Field name={f.square.name} label={f.square.label} type="number" component={renderTextField} /></div>
      <div><Field name={f.bedrooms.name} label={f.bedrooms.label} type="number" component={renderTextField} /></div>
      <div><Field name={f.capacity.name} label={f.capacity.label} type="number" component={renderTextField} /></div>
      <div><Field name={f.price.name} label={f.price.label} type="number" component={renderTextField} /></div>
      <div><Field name={f.price_line_through.name} label={f.price_line_through.label} type="number" component={renderTextField} /></div>
      <div><Field name={f.price_jan.name} label={f.price_jan.label} type="number" component={renderTextField} /></div>
      <div><Field name={f.price_feb.name} label={f.price_feb.label} type="number" component={renderTextField} /></div>
      <div><Field name={f.price_mar.name} label={f.price_mar.label} type="number" component={renderTextField} /></div>
      <div><Field name={f.price_apr.name} label={f.price_apr.label} type="number" component={renderTextField} /></div>
      <div><Field name={f.price_may.name} label={f.price_may.label} type="number" component={renderTextField} /></div>
      <div><Field name={f.price_jun.name} label={f.price_jun.label} type="number" component={renderTextField} /></div>
      <div><Field name={f.price_jul.name} label={f.price_jul.label} type="number" component={renderTextField} /></div>
      <div><Field name={f.price_aug.name} label={f.price_aug.label} type="number" component={renderTextField} /></div>
      <div><Field name={f.price_sep.name} label={f.price_sep.label} type="number" component={renderTextField} /></div>
      <div><Field name={f.price_oct.name} label={f.price_oct.label} type="number" component={renderTextField} /></div>
      <div><Field name={f.price_nov.name} label={f.price_nov.label} type="number" component={renderTextField} /></div>
      <div><Field name={f.price_dec.name} label={f.price_dec.label} type="number" component={renderTextField} /></div>
      <div><Field name={f.price_oct_apr.name} label={f.price_oct_apr.label} type="number" component={renderTextField} /></div>
      <div>
        <Field 
          name={f.booking_mark.name} 
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
      <div><Field name={f.dist_sea.name} label={f.dist_sea.label} type="number" component={renderTextField} /></div>
      <div><Field name={f.dist_tivat.name} label={f.dist_tivat.label} type="number" component={renderTextField} /></div>
      <div><Field name={f.dist_podg.name} label={f.dist_podg.label} type="number" component={renderTextField} /></div>
      <div><Field name={f.discount.name} label={f.discount.label} type="number" component={renderTextField} /></div>      
      <div className="mb-4">  
        <label className={muiFormLabelClass} data-shrink="true">
          {f.main_image.label}
        </label>   
        <div>
          { typeof realtyEdit.images !== 'undefined' ?    
              <Image width="300" height="200" rounded src={getMainImagePath(realtyEdit.images)} /> : 
              null 
          }              
        </div>    
        <Field component={FileInput} 
               name={f.main_image.name} 
               imgType="main_image_change" 
               multiple={false} 
               saveBtnRef={updateBtn.current} />
      </div> 
      <div className="mb-4">        
        <label className={muiFormLabelClass} data-shrink="true">
          {f.thumbnails.label}
        </label>        
        <div>
          { 
            typeof realtyEdit.images !== 'undefined' && 
            realtyEdit.images.length !== 0 && 
            realtyEdit.images.find(img => img.type === 'thumbnail') ?   
              realtyEdit.images.map((image, index) => {  
                if (image.type === 'thumbnail') {
                  return (
                    <div key={index} className={`${FormCss.thumb_wrapper} mr-2`}> 
                      <HighlightOffIcon 
                        onClick={(e) => { onDeleteThumbnail(e, image) }}  
                        color="primary" 
                        className={FormCss.delete_thumb_icon}>
                      </HighlightOffIcon>          
                      <Image width="200" height="150" thumbnail src={`storage/${image.name}`} /> 
                    </div> 
                  )
                }
              }) :         
            <Image width="150" height="100" rounded src='/images/no-photo.jpg' />
          }
        </div> 
        <Field component={FileInput} 
               name="thumbnails" 
               imgType="thumbnails_add" 
               multiple={true} 
               saveBtnRef={updateBtn.current} />
      </div> 
      <div>
        <Button ref={updateBtn} 
                variant="primary" 
                type="submit" 
                disabled={pristine || submitting}>
          Сохранить
        </Button>
      </div>
    </form>
  )
}


RealtyEditForm = reduxForm({
  form: 'RealtyEditForm',
  validate: validate('realty')
})(RealtyEditForm)


function mapStateToProps(state) {  
  return {
    initialValues: state.realtyEdit,
    realtyEdit: state.realtyEdit,  
    enableReinitialize: true,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleRealtyUpdate(values) {    
      dispatch(realtyUpdateAsync(values))      
    },
    thumbnailDelete(thumbnail) {
      dispatch(thumbnailDeleteAsync(thumbnail))
    }
  }
}


export default compose(connect(mapStateToProps, mapDispatchToProps)(RealtyEditForm))