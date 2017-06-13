export const valueExtractor = (obj, prop) => {
  if(prop === "sex") return obj["Gender__c"];
  if(prop === "type_ofalopecia") return obj;
  if(prop === 'age') return new Date().getFullYear() - new Date(obj.Birthdate).getFullYear();
  return '';
}

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
      res = listings.filter((listing) => listing['Bio__c'].toLowerCase().includes(activeKeyWordFilters[key].toLowerCase()))
    }
  })
  return flatten(res);
}