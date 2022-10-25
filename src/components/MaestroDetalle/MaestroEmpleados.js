import React, { Component } from 'react';
import Global from '../Global';
import axios from 'axios';


export default class MaestroEmpleados extends Component {

    state = {
        empleados : [] ,
        status : false
    }

    mostrarEmpleados = () => {
        var idDept = this.props.idDepartamento;
        var request = "/api/empleados/empleadosdepartamento/" + idDept;
        var url = Global.urlEmpleados + request;

        axios.get(url).then(res => {
            this.setState({
                empleados : res.data ,
                status : true
            });
        });
    }
    componentDidMount = () => {
        this.mostrarEmpleados();
    }

    //ESTE METODO TENEMOS QUE LLAMARLO CON CUIDADO, SIEMPRE DEBEMS COMPROBAR EL TIPO DE CMBIO. NORMALMENTE SE UTILIZA CON PROPS CUANDO OTRO COMPONENTE NOS HA CARGADO PREVIAMENTE, RECIBE UN PARAMETRO LLAMADO OLD PROPS QUE INDICA EL ANTIGUO VALOR DE PROPS
    componentDidUpdate = (oldProps) => {
        console.log("Actual props " + this.props.idDepartamento);
        console.log("Olds props " + oldProps.idDepartamento);

        //SOLAMETE REALIZAREMOS CAMBIOS EN LA PaGINA CUANDO LOS PROPS SEAN DIFERENTES
        if(this.props.idDepartamento != oldProps.idDepartamento) {
            this.mostrarEmpleados();
        }
    }

    render() {
        return (<div>
            <h1>Maestro Empleados {this.props.idDepartamento}</h1>

            {
                this.state.status == true &&
                (this.state.empleados.map((emp, index) => {
                    return (<h3 key={emp.idEmpleado}>{emp.apellido}, {emp.oficio}</h3>)
                }))
            }

        </div>)
    }
}
