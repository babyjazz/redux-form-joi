import { combineReducers } from 'redux';
import { reducer } from 'redux-form';

const allReducer = combineReducers({
  form: reducer,
});

export default allReducer;
