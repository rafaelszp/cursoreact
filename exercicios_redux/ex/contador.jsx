import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {inc,dec,stepChanged} from './contadorActions';

const Contador = (props) =>(
    <div>
        <h1>{props.counter.number}</h1>
        <input type="number"
            onChange={props.stepChanged}
            value={props.counter.step}
        />
        <button onClick={props.dec}>DEC</button>
        <button onClick={props.inc}>INC</button>
    </div>
)

const mapStateToProps = state =>({ counter: state.counter  });
const mapDispatchToProps = 
    dispatch => bindActionCreators({inc,dec,stepChanged},dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(Contador);
