import React, { Component } from "react";
import logo from '../../logo.svg';
import '../../App.css';
import { Link } from "react-router-dom";

export default class About extends Component {
  render() {
    return (
      <div className="App" >
        <header className="App-header-about">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            About Component 
          </p>
          <Link to="/"> Get Back Home</Link>
        </header>
      </div>
    );
  }
}
