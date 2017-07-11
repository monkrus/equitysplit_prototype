import * as types from './types'
import { API_URL } from '../const.js'

function loginSuccess(token) {
  sessionStorage.setItem('token', token);
  return {
    type: types.LOGIN_SUCCESS,
    token : token
  }
}

function loginFail(error) {
  return {
    type: types.LOGIN_FAIL,
    error
  }
}

export function loginUser(credentials) {
  return function(dispatch) {
    const request = new Request(`${API_URL}/auth/signin`, {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(credentials)
      });
    return fetch(request)
      .then(response => response.json())
      .then(json => dispatch(loginSuccess(json.token)))
      .catch(error => dispatch(loginFail(error)))
  }
}

function getUserInfoSuccess(info) {
  return {
    type: types.GET_USER_INFO_SUCCESS,
    userInfo : info
  }
}

function getUserInfoFail(error) {
  return {
    type: types.GET_USER_INFO_FAIL,
    error
  }
}

export function getUserInfo(token) {
  return function(dispatch) {
    const request = new Request(`${API_URL}/user/me`, {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        })
      });
    return fetch(request)
      .then(response => response.json())
      .then(json => dispatch(getUserInfoSuccess(json)))
      .catch(error => dispatch(getUserInfoFail(error)))
  }
}

export function loginUserAndGetUserInfo(credentials) {
  return function(dispatch, getState) {
    return dispatch(loginUser(credentials))
      .then(response => {
        const userJWT = getState().authentication.token
        console.log('userJWT in action:'+userJWT)
        return dispatch(getUserInfo(userJWT))
      })
   }
 }
