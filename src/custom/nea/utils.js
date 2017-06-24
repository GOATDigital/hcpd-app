 /**
  * Keyword, Speciality, Treatments/services offered, Insurance types accepted, Clinical trial site
  */

const specialityTypes = [{
    value: "Has_AA_patchy_loss__c",
    label: "Speciality11",
    type: 'Checkbox',
    name: 'type_specialilty'
  }];

const treatmentsTypes = [{
    value: "Has_AA_patchy_loss__c",
    label: "Biologics",
    type: 'Checkbox',
    name: 'type_treatments'
  }];

const insuranceTypes = [{
    value: "Has_AA_patchy_loss__c",
    label: "Medicare",
    type: 'Checkbox',
    name: 'type_insurance'
  }];

let initialStateDropdowns = [];

[].concat(specialityTypes, treatmentsTypes, insuranceTypes).forEach((item, index) => {
  initialStateDropdowns[index+1] = item
})

const initialStateCTS = {
  6: {
    name: 'clinical_trial',
    value: 'Yes'
  },
  7: {
    name: 'clinical_trial',
    value: 'No'
  }
};

export const initialState = Object.assign({}, initialStateDropdowns, initialStateCTS);