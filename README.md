# REDUX-FORM-JOI example
---
This is example of how to use redux-form and joi, not library.

# Example of  code
```jsx
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form' // ES6
import validate from './validate';


class App extends Component {

  render() {
    const {handleSubmit} = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <Field name="username" type="text" component={renderField} label="Username"/>
        <Field name="name" type="text" component={renderField} label="Name"/>
        <button type="submit">submit</button>
      </form>
    );
  }
}

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span>{error}</span>))}
    </div>
  </div>
)



export default reduxForm({
  form: 'simple', // a unique identifier for this form
  validate,
})(App);
```

```javascript
// src/validate.js
import Joi from 'joi';
import ErrorMessage from './constance/lang';


const schema = Joi.object().options({ abortEarly: false }).keys({
  username: Joi.string().min(3).max(5).required(),
  name: Joi.number().min(3).max(5).required()
})

const validate = input => {
  const { value, error } = Joi.validate(input, schema);
  const formName = 'appForm';

  return customErrorMessage(formName, error, ErrorMessage);
}

/*
 * Convert error result for joi and redux-form
 * @INPUT form name, error, form error message mapping
 * @RETURN {field_name: custom_error_message}
 * @WARNING not support nest field
 */
function customErrorMessage(formName, error, errMsgMap) {
  const obj_lang = Object.keys(errMsgMap);
  const result = {};

  error!=null && error.details.map((err, i) => {
    const error_val = `${formName}.${err.path[0]}.${err.type}`
    result[err.path[0]] = errMsgMap[error_val];
  });

  return result;
}


export default validate
```


# Contributor
---
- babyjazz


# LICENSE
---
MIT. See LICENSE.
