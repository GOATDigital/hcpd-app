import * as types from '../constants/ActionTypes';

export const filters = [
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
        type: 'Checkbox',
        value: 'Has_AA_patchy_loss__c',
        label: 'Alopecia Areata',
      },
      {
        id: 2,
        type: 'Checkbox',
        value: 'Has_AT__c',
        label: 'Alopecia Universalis',
      },
      {
        id: 3,
        type: 'Checkbox',
        value: 'Has_AU__c',
        label: 'Alopecia Areata - Patchy',
      },
      {
        id: 4,
        type: 'Checkbox',
        value: 'Has_Alopecia__c',
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
