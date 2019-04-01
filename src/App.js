import React, { Component } from 'react';
import './App.css';

import Turtle from './components/Turtle'
import Wolf from './components/Wolf'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Aloha!</h1>
        <Turtle />
        <Wolf />
      </div>
    );
  }
}

export default App;
