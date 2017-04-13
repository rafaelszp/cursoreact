import React from 'react';
import ReactDOM from  'react-dom';
import './estilo';
import Basket from './basket';
import Fruit from './fruit';

ReactDOM.render(
    <Basket>
        <Fruit name="Banana" family="Musaceae"/>
        <Fruit name="Maçã" family="Rosaceae"/>
        <Fruit name="Maçã" family="Rosaceae"/>
        <Fruit name="Abacaxi" family="Bromeliaceae"/>
        <Fruit name="Laranja" family="Rutaceae"/>
    </Basket>
    , 
    document.getElementById('app'));