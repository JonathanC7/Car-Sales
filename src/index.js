import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore } from 'redux';
import { priceReducer } from './reducers/priceReducer';

import { Provider } from 'react-redux';

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(priceReducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, rootElement);
