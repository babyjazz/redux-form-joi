import { createStore } from 'redux';
import allReducer from './allReducer';

const store = (createStore)(allReducer);

export default store;
