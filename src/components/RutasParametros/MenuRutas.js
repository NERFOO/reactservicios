import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class MenuRutas extends Component {
    render() {
        return (<div>
            <h1>MenuRutas</h1>

            <ul>
                <li>
                    {/* <a href="/">Home</a> */}
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    {/* <a href="/tabla/5">Tabla 5</a> */}
                    <NavLink to="/tabla/5">Tabla 5</NavLink>
                </li>
                <li>
                    {/* <a href="/tabla/3">Tabla 3</a> */}
                    <NavLink to="/tabla/3">Tabla 3</NavLink>
                </li>
                <li>
                    {/* <a href="/noexite">404</a> */}
                    <NavLink to="/noexite">404</NavLink>
                </li>
            </ul>

        </div>)
    }
}
