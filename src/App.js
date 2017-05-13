import React, { Component } from 'react';
import './App.css';
import MemberList from './components/MemberList'
import Table from './components/Table'
import { Grid } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Equity Split</h1>
        <Grid>
          <Table />
        </Grid>
      </div>

    );
  }
}

export default App;
