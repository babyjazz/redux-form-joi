import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import registerServiceWorker from './registerServiceWorker';
import store from './redux/store';
import App from './App';
import showResults from './showResults';

import './index.css';

ReactDOM.render(

  <Provider store={store}>
    <App onSubmit={showResults} />
  </Provider>

  , document.getElementById('root')
);
registerServiceWorker();
