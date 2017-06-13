import * as types from '../constants/ActionTypes';

const initialState = {
  filters: []
};

export default function activeFilters(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_FILTERS:
    
      return { ...state,
        doctors: {
          ...state.doctors,
          didInvalidate: true
        },
        filters: action.filters
      }
    case types.CLEAR_FILTERS:
      return { ...state,
        filters : []
      }
    case types.CHANGE_FILTERS:

      return { ...state,
        filters: action.filters
      }
    default:
      return state;
  }
}