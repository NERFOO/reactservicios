import React, { Component } from 'react'

export default class MenuRutas extends Component {
    render() {
        return (<div>
            <h1>MenuRutas</h1>

            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/tabla/5">Tabla 5</a>
                </li>
                <li>
                    <a href="/tabla/3">Tabla 3</a>
                </li>
                <li>
                    <a href="/noexite">404</a>
                </li>
            </ul>

        </div>)
    }
}
