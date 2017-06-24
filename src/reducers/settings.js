import * as types from '../constants/ActionTypes';
import {filters} from '../actions/SettingsActions';
//const sortedFilters  = filters.sort((a,b) => a.id - b.id);
const initialState = {filters};

export default function settings(state = initialState, action) {
  switch (action.type) {
    case types.RECIEVE_FILTERS:
      return { ...state, 
        filters: action.filters
      }
    default:
      return state;
  }
}