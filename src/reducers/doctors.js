import * as types from '../constants/ActionTypes';

const initialState = {
  listings: null,
  loading: false,
  error: false,
  siteID: null,
  filtering: false,
};

export default function doctors(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_DOCTORS_REQUEST: 
      return { ...state,
        siteID: action.siteID,
        loading: true,
      }
    case types.FETCH_DOCTORS_SUCCESS:
      return { ...state,
        listings: action.doctors,
        loading: false,
        isError: false
      }
    case types.FETCH_DOCTORS_FAILURE:
      return { ...state,
        listings: [],
        loading: false,
        isError: true
      }
    case types.FILTER_DOCTORS_START:
      return { ...state, 
        filtering: true
      }
    case types.FILTER_DOCTORS_FINISH: 
      return { ...state,
        filtering: false
      }
    default:
      return state;
  }
}