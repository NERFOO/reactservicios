import React, { Component } from 'react';
import axios from 'axios';
import Global from './Global';

export default class Coches2 extends Component {

    state = {
        datos : [] ,
        status : false
    }

    mostrarDatos = (e) => {
        if(e != null) {
            e.preventDefault();
        }
        var request = "/webresources/coches";
        var url = Global.urlCoches + request;

        axios.get(url).then(res => {
            this.setState({
                status : true ,
                datos : res.data
            });
        });
    }
    componentDidMount = () => {
        this.mostrarDatos();
    }

    input = React.createRef();

    filtrarMarca = (e) => {
        e.preventDefault();

        var valor = this.input.current.value.toUpperCase();
        var coche = this.state.datos;
        var filtro = [];
        for(var i = 0; i < this.state.datos.length; i++) {
            if(coche[i].marca.toUpperCase() == valor) {
                filtro.push(coche[i])
            }
        }
        this.setState({
            datos : filtro
        });
    }

    render() {
        return (<div>
            <h1>Coches2</h1>

            <form>
                <label>Marca</label>
                <input type="text" ref={this.input}/>
                <button onClick={this.filtrarMarca}>Filtrar coches</button>
                <button onClick={this.mostrarDatos}>Cargar todos los coches</button>
            </form>

            <table border="1">
                <thead>
                    <tr>
                        <th>MARCA</th>
                        <th>MODELO</th>
                        <th>CONDUCTOR</th>
                        <th>IMAGEN</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.status == true &&
                        (this.state.datos.map((coche, index) => {
                            return (<tr key={index}>
                                <td>{coche.marca}</td>
                                <td>{coche.modelo}</td>
                                <td>{coche.conductor}</td>
                                <td><img src={coche.imagen} style={{width:"80px", height: "80px"}}/></td>
                            </tr>)
                        }))
                    }
                </tbody>
            </table>

        </div>)
    }
}
