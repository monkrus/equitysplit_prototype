import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import App from './App'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import rootReducer from './reducers'
import { Login } from './containers'
import { Header, Home } from './components'
import { NotFound } from './components/common'


const history = createHistory()
const routeMiddleware = routerMiddleware(history)
let store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunkMiddleware, routeMiddleware)))

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Header />
        <div className="container">
          <Route exact path="/" component={Home}/>
          <Route path="/user" component={App}/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={NotFound}/>
        </div>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
