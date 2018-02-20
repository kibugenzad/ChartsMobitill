import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const store = createStore((state ={}) => state, applyMiddleware(thunk,logger));

export default store;