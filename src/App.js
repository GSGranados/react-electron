import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/about"> Go to the About Page</Link>
      </header>
    </div>
  );
}

export default App;
