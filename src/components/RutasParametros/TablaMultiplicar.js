import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {
    //EN ESTE COMPONENTE VAMOS A RECIBIR PROPS DE NUMERO
    constructor(props){
        super(props);
        console.log("Numero props " + props.numero);
    }

    state = {
        tabla : []
    }

    generarTabla = () => {
        var datos = [];
        for(var i = 1; i < 11; i++) {
            var op = parseInt(this.props.numero) * i;
            datos.push(op);
        }
        this.setState({
            tabla : datos
        })
    }
    componentDidMount = () => {
        this.generarTabla();
    }


    render() {
        return (<div>
            <h1>Tabla Multiplicar {this.props.numero}</h1>
            {
                this.state.tabla.map((num, index) => {
                    return (<h2 key={index}>{this.props.numero} * {index+1} = {num}</h2>)
                })
            }
        </div>)
    }
}
