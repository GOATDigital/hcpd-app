import * as types from '../constants/ActionTypes';
			
const initialState = {
 filters: [
  {
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
    name: 'Languages Spoken',
    type: 'Select',
    options: [
      {
        id: 6,
        value: 'english',
        label: 'English',
      },
      {
        id: 7,
        value: 'spanish',
        label: 'Spanish',
      }
    ]
  },
  {
    name: 'Taking Patients',
    type: 'Select',
    options: [
      {
        id: 8,
        value: 'yes',
        label: 'Yes',
      },
      {
        id: 9,
        value: 'no',
        label: 'No',
      }
    ]
  }]
};

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