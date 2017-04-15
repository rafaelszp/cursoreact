import React, {Component} from 'react';

class CaixaTexto extends Component {

    constructor(props) {
        super(props);
        this.state = {value: props.initialValue};
        this.onchange = this.onchange.bind(this); //corrigindo o scopo do this para o da Classe
    }

    onchange(ev){
        this.setState({value: ev.target.value});
    }

    render(){
        return ( 
            <div>
                <h1>Você digitou: {this.state.value}</h1>
                <input type="text" value={this.state.value} onChange={this.onchange}/>
            </div>
        );
    }
}

export default CaixaTexto;