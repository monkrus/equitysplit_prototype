import { GET_USER_INFO_SUCCESS,  GET_USER_INFO_FAIL } from '../actions/types'

const initialState = {
  error: '',
  info: {}
}

export default function user(state = initialState, action) {
  switch(action.type) {
    case GET_USER_INFO_SUCCESS:
      return { ...state, info: action.userInfo, authenticated: true }
    case GET_USER_INFO_FAIL:
      return { ...state, error: action.error, authenticated: false }
    default:
      return state
  }
}
