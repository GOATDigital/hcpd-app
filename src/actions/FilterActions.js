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
  
  return dispatch => {
    let tmp = updateFilters(flatten(values(filters)));
    dispatch(tmp);
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