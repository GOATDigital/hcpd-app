import { isEmpty, some, flatten } from 'lodash';

/**
 * Returns correct property bsed on the filter name
 */
export const valueExtractor = (obj, prop) => {
  if(prop === "sex") return obj["Gender__c"];
  if(prop === "type_ofalopecia") return obj;
  if(prop === 'age') return new Date().getFullYear() - new Date(obj.Birthdate).getFullYear();
  return '';
}

/**
 * Comparing different props
 */
export const valueComparator = {
  "sex": (itemValue, filterValue) => itemValue.includes(filterValue),
  "type_ofalopecia": (itemValue, filterValue) => {
    return itemValue[filterValue] ? itemValue[filterValue].includes("Yes") : false;
  },
  "age" : (itemValue, filterValue) => {
    const minMax = filterValue.split('-')
    return itemValue > parseInt(minMax[0]) && itemValue < parseInt(minMax[1]);
  }
}
/**
 * Comparing for multiple-selection filters
 */
export const checkboxTypeFilter = (filterSet, item) => {
    return _.some(filterSet, (filter) => {
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

const concatProps = (item) => [item['FirstName'], item['LastName'], item['Email'], item['Email'], item['Bio__c']].join` `;