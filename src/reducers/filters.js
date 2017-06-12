import * as types from '../constants/ActionTypes';

const initialState = {
  1: {
    name: 'type_ofalopecia',
    value: 'Alopecia Areata'
  },
  2: {
    name: 'type_ofalopecia',
    value: 'Alopecia Universalis'
  },
   3: {
    name: 'type_ofalopecia',
    value: 'Alopecia Universalis'
  },
   4: {
    name: 'type_ofalopecia',
    value: 'Alopecia Universalis'
  },
  6: {
      name: 'sex',
      value: 'Male'
    },
  7: {
      name: 'sex',
      vaue: 'Female'
    }
    /**
     *     {
        id: 8,
        value: '2030',
        label: '20-30',
      },
      {
        id: 9,
        value: '3040',
        label: '30-40',
      },
      {
        id: 10,
        value: '4050',
        label: '40-50',
      }
     */
};

export default function filters(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}