import {
  isEmpty,
  some,
  flatten
} from 'lodash';

/**
 * Returns correct property bsed on the filter name
 */
export const valueExtractor = (obj, prop) => {
  if (prop === "sex") return obj["Gender__c"];
  if (prop === "type_ofalopecia") return obj;
  return '';
}

/**
 * Comparing different props
 */
export const valueComparator = {
  "sex": (itemValue, filterValue) => itemValue.includes(filterValue),
  "type_ofalopecia": (itemValue, filterValue) => {
    return itemValue[filterValue] ? itemValue[filterValue].includes("Yes") : false;
  }
}
const descriptionFitsUS = new RegExp(/.*, [A-Z]{2}, .*/);
const fitsState = (state, item) => item['OtherState'] || item['MailingState'] == state;
const fitsCity = (city, item) => (item['OtherCity'] || item['MailingCity']).includes(city);

/**
 * Comparing address
 */
export const addressFilter = (listings, curentAddress) => {
  if(descriptionFitsUS.test(curentAddress)){ //it's a US address: 'City, ST, United States'
    const [city, state] = curentAddress.split(', ');
    return listings.filter(listing => fitsState(state, listing) && fitsCity(city, listing));
  }
  return listings;
}

/**
 * Comparing for multiple-selection filters
 */
export const checkboxTypeFilter = (filterSet, item) => {
  return _.some(filterSet, (filter) => {
    console.log(valueExtractor(item, filter.name), filter.value)
    return valueComparator[filter.name](valueExtractor(item, filter.name), filter.value);
  })
}

/**
 * Search for text in item text fields
 * @param {*} listings 
 * @param {*} activeKeyWordFilters 
 * @param {*} filters 
 */
export const keyWordFilters = (listings, activeKeyWordFilters, filters) => {
  if (isEmpty(activeKeyWordFilters)) {
    return listings;
  }
  let keys = Object.keys(activeKeyWordFilters);
  let res = [];

  keys.forEach((key) => {
    if (activeKeyWordFilters[key] == '') {
      res = listings;
    } else {
      res = listings.filter((listing) => concatProps(listing).toLowerCase().includes(activeKeyWordFilters[key].toLowerCase()))
    }
  })
  return flatten(res);
}

const concatProps = (item) => [item['FirstName'], item['LastName'], item['Email'], item['Email'], item['Bio__c']].join ` `;

export const initialState = {
  1: {
    name: 'type_ofalopecia',
    type: 'Checkbox',
    label: 'Alopecia Areata - Patchy',
    value: 'Has_AA_patchy_loss__c'
  },
  2: {
    name: 'type_ofalopecia',
    type: 'Checkbox',
    label: 'Alopecia Totalis',
    value: 'Has_AT__c'
  },
  3: {
    name: 'type_ofalopecia',
    type: 'Checkbox',
    label: 'Alopecia Universalis',
    value: 'Has_AU__c'
  },
  4: {
    name: 'type_ofalopecia',
    type: 'Checkbox',
    label: 'Alopecia Areata',
    value: 'Has_Alopecia__c'
  },
  6: {
    name: 'sex',
    value: 'Male'
  },
  7: {
    name: 'sex',
    value: 'Female'
  }
};