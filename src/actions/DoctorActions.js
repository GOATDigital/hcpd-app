import * as types from '../constants/ActionTypes';

import fetch from 'isomorphic-fetch'

import {
  CLIENT_ID,
  API_ADDRESS
} from '../constants/Config';



export default function fetchDoctorsRequest(siteID) {
  return {
    type: types.FETCH_DOCTORS_REQUEST,
    siteID,
  }
}

function fetchDoctorsSuccess(json) {
  return {
    type: types.FETCH_DOCTORS_SUCCESS,
    doctors: json,
  }
}

function fetchDoctorsError(error) {
  console.error(error);
  return {
    type: types.FETCH_DOCTORS_FAILURE,
  }
}


function mapPropsToFilters(json) {
  json.map(i => {
    return i;
  })
  return json;
}

export function fetchDoctors(siteID) {

  const START_PAGE = '';

  return dispatch => {

    dispatch(fetchDoctorsRequest(siteID))

    const API_FULL_PATH = `${API_ADDRESS}/api/listings?siteId=${siteID}&input=new&isTakingPatients=true&distance=10&page=${START_PAGE}`;
    return fetch(API_FULL_PATH, {
        method: 'GET'
      }, {
        mode: 'no-cors'
      })
      .then(response => {
        if (response.status >= 400) {
          //throw new Error("Bad response from server");
          dispatch(fetchDoctorsError(response))
          return [];
        } else {
          return response.json();
        }
      })
      .then(json =>
        dispatch(fetchDoctorsSuccess(json))
      )
  }
}

function shouldFetchDoctors(state, siteID) {
  //debugger;
  const listings = state.doctors.listings
  if (!listings) {
    return true
  } else if (doctors.loading) {
    return false
  } else {
    return doctors.didInvalidate
  }
}

export function fetchDoctorsIfNeeded(siteID) {

  return (dispatch, getState) => {
    if (shouldFetchDoctors(getState(), siteID)) {
      // Dispatch a thunk from thunk!
      return dispatch(fetchDoctors(siteID))
    } else {
      // Let the calling code know there's nothing to wait for.
      return Promise.resolve()
    }
  }
}

export function filterDoctorsStart() {
  return {
    type: types.FILTER_DOCTORS_START,
  }
}

export function filterDoctorsFinish() {
  return {
    type: types.FILTER_DOCTORS_FINISH,
  }
}