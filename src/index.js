import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger';
import {legacy_createStore as createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk'
import './index.css';
import 'tachyons'
import { searchPlayers, requestPlayers } from './reducers';


const logger = createLogger()

const rootReducers = combineReducers({searchPlayers, requestPlayers})
const store =  
    createStore(rootReducers, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(<Provider store={store}>
                <App />
                </Provider>,  document.querySelector('#root'));



