import React from 'react';

export default (props)=> (

    <div>
        <span>{props.name}:</span>&nbsp;
        <strong>{props.family}</strong>
        <span>&nbsp; Tipo: {props.type}</span>
    </div>

);