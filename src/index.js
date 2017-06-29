import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { Login } from './containers'
import { Header } from './components'
import { Home } from './components'

ReactDOM.render(
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={App}/>
      <Route path="/login" component={Login}/>
      <Route path="/home" component={Home} />
    </div>
  </Router>,
  document.getElementById('root')
);
