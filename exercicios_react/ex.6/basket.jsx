import React from 'react';
import Fruit from './fruit';

export default (props) =>(

    <div>
        <h1>Frutas encontradas no Brasil</h1>
        {props.children}
    </div>
);