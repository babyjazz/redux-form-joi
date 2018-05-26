// Form error message mapping OR language dictionary
const lang = {
  // Redux-form key syntax ${form_name}.${form_field}.${form_validate[0]}.${form_validate[1]}.${form_validate[n]}
  "appForm.username.any.required": "username REQUIRED naja",
  "appForm.username.string.min": "username.STRING.MIN(3) naja",
  "appForm.name.any.required": "name REQUIRED naja",
  "appForm.name.number.min": "name.NUMBER.MIN(3) naja",
  "appForm.name.number.base": "name MUST BE NUMBER naja"
}

module.exports = lang;
