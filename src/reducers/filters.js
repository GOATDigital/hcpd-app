import * as types from '../constants/ActionTypes';

const initialState = {
  1: {
    name: 'type_ofalopecia',
    label: 'Alopecia Areata',
     value: 'Has_AA_patchy_loss__c'
  },
  2: {
    name: 'type_ofalopecia',
    label: 'Alopecia Universalis',
     value: 'Has_AT__c'
  },
   3: {
    name: 'type_ofalopecia',
    label: 'Alopecia Areata - Patchy',
    value : 'Has_AU__c'
  },
   4: {
    name: 'type_ofalopecia',
    label: 'Alopecia Totalis',
    value : 'Has_Alopecia__c'
  },
  6: {
      name: 'sex',
      value: 'Male'
    },
  7: {
      name: 'sex',
      value: 'Female'
    },
  8: {
        name: 'age',
        value: '20-30',
        label: '20-30',
      },
  9: {
        name: 'age',
        value: '30-40',
        label: '30-40',
      },
  10: {
        name: 'age',
        value: '40-50',
        label: '40-50',
      },
  11: {
        name: 'age',
        value: '50-60',
        label: '50-60',
      }
};

export default function filters(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}