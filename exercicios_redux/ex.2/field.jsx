import React, {Component} from 'react';
import {connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeValue} from './fieldActions';

class Field extends Component {

    render(){
        return ( 
            <div>
                <h1>Você digitou: {this.props.value}</h1>
                <input 
                    type="text" 
                    value={this.props.value} 
                    onChange={this.props.changeValue}/>
            </div>
        );
    }
}

// export default Field;

//state.field.value referencia o objeto declarado em combine reducers
// no arquivo index.js:9
function mapStateToProps(state){
    return {
        value: state.field.value
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ changeValue }, dispatch)
}

//Pattern decorator no objeto Field
export default connect(mapStateToProps, mapDispatchToProps)(Field);