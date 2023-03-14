
import {legacy_createStore,applyMiddleware} from 'redux'
import logger from "redux-logger";
import AuthReducer from './authReducer';
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist'


const persistConfig= {
    key: 'auth',
    storage
}
const persistedReducer= persistReducer(persistConfig,AuthReducer)

const reduxStore= legacy_createStore(persistedReducer,applyMiddleware(logger));
export  default reduxStore;
