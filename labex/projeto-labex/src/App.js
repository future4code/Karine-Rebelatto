
import React from 'react';
import './App.css';
import {Routes} from "./routes/Routes";
import axios from 'axios';

export default class App extends React.Component {
  render() {
    return(
        <div className="App">
          <Routes/>
            <h1>HELP</h1>
            <button>CLIQUE</button>
        </div>

  ); 
}
}