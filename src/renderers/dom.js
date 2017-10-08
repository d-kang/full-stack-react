import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './server';
import App from '../components/App';
import storeConfig from '../store/store';

ReactDOM.render(
  <Provider store={storeConfig()}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
