import React, { Component } from 'react';
import Global from '../Global';
import axios from 'axios';
import MaestroEmpleados from './MaestroEmpleados';

export default class MaestroDepartamentos extends Component {
    state = {
        departamentos: [] ,
        departamentoStatus: false ,
        idDepartamento : 0
    }

    departamentosSelect = () => {
        var request = "/api/departamentos";
        var url = Global.urlDepartamentos + request;
        axios.get(url).then(res => {
            this.setState({
                departamentos: res.data ,
                departamentoStatus: true
            })
        });
    }
    componentDidMount = () => {
        this.departamentosSelect();
    }

    select = React.createRef();
    mostrarEmpleados = (e) => {
        e.preventDefault();

        var id = this.select.current.value;
        this.setState({
            idDepartamento : id
        });
    }

    render() {
        return (<div>
            <h1>Maestro departamentos empleados {this.state.idDepartamento}</h1>
            <form>
                <label>Departamentos</label>
                <select ref={this.select}>
                    {
                        this.state.departamentoStatus == true &&
                        (
                            this.state.departamentos.map((dept, index) => {
                                return (<option key={index} value={dept.Numero}>{dept.Nombre}</option>)
                            })
                        )
                    }
                </select>
                <button onClick={this.mostrarEmpleados}>Mostrar empleados</button>

                <ul>
                    {
                        this.state.idDepartamento != 0 &&
                        (<MaestroEmpleados idDepartamento={this.state.idDepartamento} />)
                    }
                </ul>
            </form>
        </div>)
    }
}
