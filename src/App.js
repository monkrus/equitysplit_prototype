import React, { Component } from 'react'
import './App.css'
import { Header, Footer } from './components'
import { DynamicCalculation } from './containers'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="app-body">
          <h1>Equity Split</h1>
          <DynamicCalculation />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
