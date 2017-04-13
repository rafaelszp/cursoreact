import React, {Component} from 'react';

export default class Contador extends Component {

    constructor(props) {
        super(props);
        this.state = {value: props.initialValue};
    }

    add(val){
        this.setState({...this.state, value: this.state.value+val}); //forma utilizada para alterar vários atributos
        //this.setState({ value: this.state.value+val});//forma mais simples de fazer quando será alterado apenas 1 atributo
    }

    render(){
        return ( 
            <div>
                <h1>{this.props.label}</h1>
                <h2>{this.state.value}</h2>
                <button onClick={() => this.add(-1)}>Dec</button>
                <button onClick={() => this.add(1)}>Add</button>
            </div>
        );
    }
}