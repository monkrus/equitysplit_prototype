import { LOGIN_SUCCESS,  LOGIN_FAIL } from '../actions/types'

const initialState = {
  error: '',
  token: {},
  authenticated: false
}

export default function authentication(state = initialState, action) {
  switch(action.type) {
    case LOGIN_SUCCESS:
      console.log('token in reducer:'+action.token)
      return { ...state, token: action.token, authenticated: true }
    case LOGIN_FAIL:
      return { ...state, error: action.error, authenticated: false }
    default:
      return state
  }
}
