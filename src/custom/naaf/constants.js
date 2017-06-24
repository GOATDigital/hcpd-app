export const header_naaf = {
     head: 'Young Adult Mentor Program',
     subhead: 'Find a peer mentor with experience with alopecia areata'
};

export const list_titles_naaf = ['Name', 'Age,<br>Gender', 'Will meet<br>with', 'Type of Alopecia<br>Areata', 'Contact'];

export const match_text_naaf = 'peer mentors match your search';

export const find_text_naaf = 'Find a peer mentor near you';

export const filters_naaf = [
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
        label: 'Alopecia Areata - Patchy',
      },
      {
        id: 2,
        type: 'Checkbox',
        value: 'Has_AT__c',
        label: 'Alopecia Totalis',
      },
      {
        id: 3,
        type: 'Checkbox',
        value: 'Has_AU__c',
        label: 'Alopecia Universalis',
      },
      {
        id: 4,
        type: 'Checkbox',
        value: 'Has_Alopecia__c',
        label: 'Alopecia Areata',
      }
    ]
  },
  {
    id: 4,
    name: 'Keyword',
    type: 'Keyword',
    fields: ['first_name', 'last_name', 'practice_name'],
  }
];