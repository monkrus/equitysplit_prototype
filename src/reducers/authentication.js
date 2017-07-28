import { LOGIN_SUCCESS,  LOGIN_FAIL, LOGOUT } from '../actions/types'
import { push } from 'react-router-redux'

const initialState = {
  error: '',
  token: {},
  authenticated: false
}

export default function authentication(state = initialState, action) {
  switch(action.type) {
    case LOGIN_SUCCESS:
      return { ...state, token: action.token, authenticated: true }
    case LOGIN_FAIL:
      return { ...state, error: action.error, authenticated: false }
    case LOGOUT:
      return { ...state, authenticated: false }
    default:
      return state
  }
}
