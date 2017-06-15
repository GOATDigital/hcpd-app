import * as types from '../constants/ActionTypes';

const initialState = {
  radius: { value: 25, label: '25 Miles' },
  lat: null,
  long: null,
};

export function location(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_LAT_LONG:
      return { ...state,
        location: action.location
      }
    case types.UPDATE_RADIUS:
      return { ...state, 
        radius: action.radius,
      }
    default:
      return state;
  }
}