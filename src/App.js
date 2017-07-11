import React, { Component } from 'react'
import { Footer, NotFound } from './components/common'
import { DynamicCalculation } from './containers'
import { Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <ul className="nav nav-tabs">
        	<li><Link to={`${this.props.match.url}/equity`}>Equity</Link></li>
        	<li><Link to={`${this.props.match.url}/company`}>Company</Link></li>
        	<li><Link to={`${this.props.match.url}/analytics`}>Analytics</Link></li>
        	<li><Link to={`${this.props.match.url}/legal`}>Legal</Link></li>
        	<li><Link to={`${this.props.match.url}/settings`}>Settings</Link></li>
        </ul>

        <Route exact path={`${this.props.match.url}`} component={DynamicCalculation}/>
        <Route path={`${this.props.match.url}/equity`} component={DynamicCalculation}/>
        <Route path={`${this.props.match.url}/company`} component={NotFound}/>
        <Route path={`${this.props.match.url}/analytics`} component={NotFound}/>
        <Route path={`${this.props.match.url}/legal`} component={NotFound}/>
        <Route path={`${this.props.match.url}/settings`} component={NotFound}/>
        <Footer />
      </div>
    );
  }
}

export default App;
