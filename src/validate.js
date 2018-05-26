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
