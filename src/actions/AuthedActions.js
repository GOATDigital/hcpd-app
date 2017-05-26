import * as types from '../constants/ActionTypes';
import { CLIENT_ID, API_USER_ID, API_USERNAME, API_PASSWORD, API_ADDRESS } from '../constants/Config';

function loginUser() {
  return dispatch =>
    fetch(`${API_ADDRESS}/api/auth/login`, {
      method: 'POST',
      headers: {  
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" 
      },  
      body: `password=${API_PASSWORD}&username=${API_USERNAME}&_id=${API_USER_ID}`,
    })
      .then(response => response.json())
      .then(json => dispatch(receiveAccessToken(json.token)))
      .catch(err => { throw err; });
}

export function initAuth() {
  return dispatch => {
    const siteStorage = localStorage;
    const { token } = siteStorage;
    if (!siteStorage.token) {
      console.log('loging in')
      return dispatch(loginUser());
    }
    return null;
  };
}

function receiveAccessToken(token) {
  localStorage.token = token;
  return {
    type: types.RECEIVE_ACCESS_TOKEN,
    token,
  };
}