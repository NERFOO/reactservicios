import React, { Component } from 'react';
import axios from 'axios';
import Global from './Global';

export default class DepartamentosEmpleados extends Component {

    state = {
        departamentos: [] ,
        empleados: [] ,
        departamentoStatus: false ,
        empleadosStatus : false
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
        var request = "/api/Empleados/EmpleadosDepartamento/" + id;
        var url = Global.urlEmpleados + request;

        axios.get(url).then(res => {
            this.setState({
                empleados: res.data ,
                empleadosStatus : true
            });
        });
    }

    render() {
        return (<div>
            <h1>DepartamentosEmpleados</h1>
            <form onSubmit={this.mostrarEmpleados}>
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
                        this.state.empleadosStatus == true &&
                        (this.state.empleados.map((empleado, index) => {
                            return(<li key={index}>{empleado.apellido}</li>)
                        }))
                    }
                </ul>
            </form>
        </div>)
    }
}
