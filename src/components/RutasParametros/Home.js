import React, { Component } from 'react';
import minionFoto from '../assets/images/img1.jpg';

export default class Home extends Component {
    render() {
        return (<div>
            <h1>Home</h1>
            <img src={minionFoto} style={{width:"150px"}}/>


        </div>)
    }
}
