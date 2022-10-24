import React, { Component } from 'react'
import axios from 'axios';
import Global from './Global';

export default class BuscadorCustomer extends Component {

    cajaIdRef = React.createRef();

    state = {
        customers : {} ,
        status: false
    }

    buscarCustomer = (e) => {
        e.preventDefault();

        var id = this.cajaIdRef.current.value;
        var request = "customers/" + id + ".json";
        var url = Global.urlCustomers + request;

        axios.get(url).then(res => {
            console.log("Leyendo...")
            this.setState({
                customer: res.data.customer ,
                status: true
            });
        });
    }

    render() {
        return (<div>
            <h1>BuscadorCustomer</h1>

            <form onSubmit={this.buscarCustomer}>
                <label>Introduzca id </label>
                <input type="text" ref={this.cajaIdRef}/>
                <button>buscar cliente</button>
            </form>
            {
                this.state.status == true &&
                (<div>
                    <h2 style={{color:"blue"}}>Empresa : {this.state.customer.companyName}</h2>
                    <h2 style={{color:"green"}}>Contacto : {this.state.customer.contactName}</h2>
                    <h2 style={{color:"fuchsia"}}>Ciudad : {this.state.customer.city}</h2>
                </div>)
            }
        </div>)
    }
}
