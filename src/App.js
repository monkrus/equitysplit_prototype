import React, { Component } from 'react';
import './App.css';
import DynamicCalculation from './components/DynamicCalculation'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Equity Split</h1>
        <DynamicCalculation />
      </div>
    );
  }
}

export default App;
