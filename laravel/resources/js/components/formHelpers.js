import React from 'react';

// Material UI
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'


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

export const renderTextArea = ({
  input, 
  meta: { touched, error, warning },
  ...custom
  }) => (
  <div>
    <label className={custom.labelClassName}>
      {custom.label}
    </label>
    <div>
      <textarea 
        {...input}
        className={custom.textareaClassName}         
        rows={custom.rows}         
        cols={custom.cols}         
        placeholder={custom.label} />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
) 

export const toggleOption = (prop, first, second) => prop === first ? second : first 