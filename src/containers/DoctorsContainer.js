import React, {
  Component
} from 'react';
import {
  connect
} from 'react-redux';
import {
  fetchDoctorsIfNeeded,
  filterDoctorsStart,
  filterDoctorsFinish
} from '../actions/DoctorActions';
import MobileDoctors from '../components/MobileDoctors';
import Doctors from '../components/Doctors';
import {
  CLIENT_ID
} from '../constants/Config';

//DB specific read/compare methods
import {
  valueComparator,
  valueExtractor,
  keyWordFilters,
  checkboxTypeFilter,
  filterByGeoDistance
} from '../constants/item-design/naaf87561';

import {
  flatten
} from 'lodash';


class DoctorsContainer extends Component {

  componentDidMount() {
    const {
      dispatch
    } = this.props
    dispatch(fetchDoctorsIfNeeded(CLIENT_ID))
  }

  componentWillUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return <Doctors { ...this.props
    }
    />;
  }
}

const getFilteredListings = (listings, activeFilters, filters, location, activeKeyWordFilters, settings, sortBy) => {

  let sorted = sortListings(listings, sortBy);
  let keyWordFiltered = keyWordFilters(sorted, activeKeyWordFilters, settings.filters);
  let filtered = filterByGeoDistance(keyWordFiltered, location)

  const filterGroups = _.partition(activeFilters.filter(f => f), i => filters[i].type === "Checkbox") || [
    [],
    []
  ];

  if (filterGroups[0].length) { //multiple choice
    const groups = _.groupBy(filterGroups[0].map(filter => filters[filter]), filter => filter.name);
    filtered = filtered.filter(item => {
      let itemFits = true;
      Object.keys(groups).forEach(groupIndex => {
        itemFits = itemFits ? checkboxTypeFilter(groups[groupIndex], item) : false;
      })
      return itemFits;
    })
  }

  if (filterGroups[1].length) { //single choice
    filterGroups[1].map(filter => {
      if (filter) filtered = filterListings(filtered, filters[filter])
    });
  }

  return filtered ? filtered : listings;
}

const sortListings = (listings, sortBy) => {
  if (!listings) {
    return
  }
  const toSort = listings;
  if (sortBy.value === 'Featured') {
    return toSort.slice().sort((a, b) => {
      return (a.featured === b.featured) ? 0 : a.featured ? -1 : 1;
    })
  } else {
    return toSort.slice().sort((a, b) => {
      if (a.last_name < b.last_name) return -1;
      if (a.last_name > b.last_name) return 1;
      return 0;
    });
  }
}

const filterListings = (listings, filter) => {
  return listings.filter((listing) => {
    const itemValue = valueExtractor(listing, filter.name);
    if (itemValue == null) return false;
    return valueComparator[filter.name](itemValue, filter.value);
  })
}

function mapStateToProps(state) {
  const {
    settings,
    entities,
    environment,
    navigator,
    doctors,
    activeFilters,
    filters,
    location,
    activeKeyWordFilters,
    sort
  } = state;
  const {
    height,
    isMobile
  } = environment;
  const {
    listings,
    loading,
    error,
    isError
  } = doctors;
  const {
    radius,
    lat,
    long
  } = location;
  const {
    sortBy
  } = sort;

  return {
    isMobile,
    activeKeyWordFilters,
    filters,
    filteredListings: getFilteredListings(listings, activeFilters.filters, filters, location, activeKeyWordFilters, settings, sortBy),
  };
}

export default connect(mapStateToProps)(DoctorsContainer);