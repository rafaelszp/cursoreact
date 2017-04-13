import React from 'react';
import ReactDOM from  'react-dom';
import './estilo';
import Contador from './contador';


ReactDOM.render(
    <Contador initialValue={10} label="Contagem regressiva"/>
    , 
    document.getElementById('app'));