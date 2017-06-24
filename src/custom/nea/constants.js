export const filters = {
  1: {
    name: 'test',
    value: 'Test',
    active: false
  }
}

export const header_nea = {
     head: 'Health Care Provider Directory',
     subhead: 'Find a health care provider with experience treating Eczema'
};

export const list_titles_nea = ['Badge', 'Name', 'Type of Practice', 'Payment options', 'Contacts'];

export const match_text_nea = 'doctors matching your search';

export const find_text_nea = 'Find a Provider Near You';

//Speciality, Treatments/services offered, Insurance types accepted, Clinical trial site
export const filters_nea = [
    {
    id: 1,
    name: 'Keyword',
    type: 'Keyword',
    fields: ['first_name', 'last_name', 'practice_name'],
  },
   {
    id: 2,
    name: 'Clinical trial site',
    type: 'Radio',
    options: [
      {
        id: 6,
        value: 'yes',
        label: 'Yes',
      },
      {
        id: 7,
        value: 'no',
        label: 'No',
      }
    ]
  },
 {
    id: 3,
    name: 'Speciality',
    type: 'Checkbox',
    options: [
      {
        id: 1,
        type: 'Checkbox',
        value: 'Has_AA_patchy_loss__c',
        label: 'Speciality',
      }
    ]
  },
   {
    id: 4,
    name: 'Treatments/services offered',
    type: 'Checkbox',
    options: [
      {
        id: 1,
        type: 'Checkbox',
        value: 'Has_AA_patchy_loss__c',
        label: 'Speciality',
      }
    ]
  },
   {
    id: 5,
    name: 'Insurance types accepted',
    type: 'Checkbox',
    options: [
      {
        id: 1,
        type: 'Checkbox',
        value: 'Has_AA_patchy_loss__c',
        label: 'Speciality',
      }
    ]
  }
];