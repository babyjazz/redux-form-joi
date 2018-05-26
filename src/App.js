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
