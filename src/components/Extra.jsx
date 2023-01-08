    
// ----------Store-----------------

import {legacy_createStore,applyMiddleware} from 'redux'
import logger from "redux-logger";
import AuthReducer from './authReducer';
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist'

// const allReducers= combineReducers({Reducer,AuthReducer})
const persistConfig= {
    key: 'auth',
    storage
}
const persistedReducer= persistReducer(persistConfig,AuthReducer)

const reduxStore= legacy_createStore(persistedReducer,applyMiddleware(logger));
export  default reduxStore;


// ------------------index---------------------


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reduxStore from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
let persistor= persistStore(reduxStore);
root.render(
  <React.StrictMode>
    <PersistGate persistor={persistor}>
    <Provider store={reduxStore}> 
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
    </PersistGate>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
