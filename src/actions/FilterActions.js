import * as types from '../constants/ActionTypes';
import { fetchDoctor } from './DoctorActions';

import { values, flatten } from 'lodash';


function updateFilters(filters) {
  return {
    type: types.UPDATE_FILTERS,
    filters,
  }
}


export default function parseFilters(filters) {

  console.log(filters);
  
  return dispatch => {
    dispatch(updateFilters(flatten(values(filters))));
  }
}

export function toggleFilters() {
  return {
    type: types.TOGGLE_FILTERS
  }
}

export function clearFilters() {
  return {
    type: types.CLEAR_FILTERS
  }
}