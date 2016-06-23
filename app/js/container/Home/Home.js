import React, {Component} from "react";
import {Link} from 'react-router';

export default class Home extends Component{
  render(){
    return (
      <div className="content">
        <p>This the first page!</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p><Link to="/about">This is a link to page of about</Link></p>
      </div>
    );
  }
}
