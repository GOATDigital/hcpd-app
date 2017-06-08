import * as types from '../constants/ActionTypes';

const filters = [
   {
    name: 'Age',
    type: 'Checkbox',
    options: [
      {
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
    ]
  },
  {
    id: 2,
    name: 'Gender',
    type: 'Select',
    options: [
      {
        id: 6,
        value: 'male',
        label: 'Male',
      },
      {
        id: 7,
        value: 'female',
        label: 'Female',
      }
    ]
  },
 {
    id: 1,
    name: 'Type of Alopecia',
    type: 'Checkbox',
    options: [
      {
        id: 1,
        value: 'Alopecia Areata',
        label: 'Alopecia Areata',
      },
      {
        id: 2,
        value: 'Alopecia Universalis',
        label: 'Alopecia Universalis',
      },
      {
        id: 3,
        value: 'Alopecia Areata - Patchy',
        label: 'Alopecia Areata - Patchy',
      },
      {
        id: 4,
        value: 'Alopecia Totalis',
        label: 'Alopecia Totalis',
      }
    ]
  },
  {
    id: 4,
    name: 'Keyword',
    type: 'Keyword',
    fields: ['first_name', 'last_name', 'practice_name'],
  }
]

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
