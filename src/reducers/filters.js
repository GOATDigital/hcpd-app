import * as types from '../constants/ActionTypes';

const initialState = {
  1: {
    name: 'type_ofalopecia',
    value: 'Alopecia Areata',
    active: false
  },
  2: {
    name: 'type_ofalopecia',
    value: 'Alopecia Universalis',
    active: false
  },
  
  7: {
      value: 'spanish',
      name: 'languages_spoken',
    },
  8: {
      value: 'yes',
      name: 'taking_patients',
    },
  9: {
      value: 'no',
      name: 'taking_patients',
    }
};

export default function filters(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}