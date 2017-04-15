import React from 'react';
import ReactDOM from  'react-dom';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';

import './estilo';
import CaixaTexto from './caixaTexto';

const reducers = combineReducers({
    field: () => ({value: 'Opa'})
});

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <CaixaTexto initialValue=""/>
    </Provider>
    , 
    document.getElementById('app'));