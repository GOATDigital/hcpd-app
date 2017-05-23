import * as types from '../constants/ActionTypes';

import fetch from 'isomorphic-fetch'

import { GOOGLE_MAPS_API } from '../constants/Config';

export function changeLocation(place_id) {
  if (!place_id) {
    let location = {
      lat: null,
      long: null,
    }
    return dispatch => {
      dispatch(updateLocation(location));
    }
  }
  return dispatch => {
    dispatch(getLatLong(place_id));
  }
}

function getLatLong(place_id) {
  return dispatch => {
    return fetch(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${place_id}&key=${GOOGLE_MAPS_API}`)    
      .then((response) => {
        return response.json();
      }).then((json) => {
        let lat = json.result.geometry.location.lat;
        let long = json.result.geometry.location.lng;
        let loc = {
          lat: lat,
          long: long,
        }
        dispatch(updateLatLong(loc));
      })
      .catch(err => { throw err; });
  }
}

function updateLocation(location) {
  return dispatch => {
    dispatch(updateLatLong(location));
  }
}

function updateLatLong(location) {
  return {
    type: types.UPDATE_LAT_LONG,
    location
  }
}

export function updateRadius(radius) {
  return {
    type: types.UPDATE_RADIUS,
    radius,
  }
}