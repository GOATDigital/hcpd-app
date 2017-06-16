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
export const checkboxTypeFilter = (filterSet, item) => _.some(filterSet, (filter) => valueComparator[filter.name](valueExtractor(item, filter.name), filter.value))


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

export const specificFilterTypes = 
  [{
    value: "Has_AA_patchy_loss__c",
    label: "Alopecia Areata - Patchy"
  },{
    value:"Has_AT__c",
    label:"Alopecia Totalis"
  },{
    value:"Has_AU__c",
    label:"Alopecia Universalis"
  },{
    value:"Has_Alopecia__c",
    label:"Alopecia Areata"
  }];

let initialStateAA = {};

specificFilterTypes.map(i => {
  i.type = 'Checkbox';
  i.name = 'type_ofalopecia';
  return i
}).forEach((item, index) => {
  initialStateAA[index+1] = item
})

const initialStateGender = {
  6: {
    name: 'sex',
    value: 'Male'
  },
  7: {
    name: 'sex',
    value: 'Female'
  }
};

export const initialState = Object.assign({}, initialStateAA, initialStateGender)