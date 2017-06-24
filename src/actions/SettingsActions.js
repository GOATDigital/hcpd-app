import * as types from '../constants/ActionTypes';

import {filters_naaf} from '../custom/naaf/constants';
import {filters_nea} from '../custom/nea/constants';

export const filters = (__APPID__ === 'naaf87561') ? filters_naaf : filters_nea;

function fetchFilters() {
  let filt = filters;
  return dispatch => {
    dispatch(recieveFilters(filt));
  }
}

function recieveFilters(filters) {
  return {
    type: types.RECIEVE_FILTERS,
    filters,
  }
}

export function initSettings() {
  return dispatch => {
    dispatch(fetchFilters());
  }
}
