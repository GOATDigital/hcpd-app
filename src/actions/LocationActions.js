import * as types from '../constants/ActionTypes';

import fetch from 'isomorphic-fetch'

import { GOOGLE_MAPS_API } from '../constants/Config';

export function changeLocation(placeObject) {
    return dispatch => {
      dispatch(updateLocation(placeObject));
    }
}

function updateLocation(location) {
  return dispatch => {
    dispatch(updateLatLong(location.description));
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