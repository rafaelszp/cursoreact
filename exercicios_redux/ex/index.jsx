import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import './estilo.css';
import contadorReducer from './contadorReducer';
import Contador from './contador'


const reducers = combineReducers({
    counter: contadorReducer
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Contador />
    </Provider>
    , 
    document.getElementById('app'));
