import React, { Component } from 'react';
import logo404 from '../assets/images/img3.jpg';

export default class PageNotFound extends Component {
    render() {
        return (<div>
            <h1>PageNotFound</h1>
            <img src={logo404} style={{width:"150px"}}/>

        </div>)
    }
}
