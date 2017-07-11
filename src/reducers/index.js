import {combineReducers} from 'redux'
import { routerReducer } from 'react-router-redux'
import authentication from './authentication'
import user from './user'

const rootReducer = combineReducers({
  authentication,
  user,
  router: routerReducer
})

export default rootReducer
