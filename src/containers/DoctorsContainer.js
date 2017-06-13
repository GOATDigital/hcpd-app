import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDoctorsIfNeeded, filterDoctorsStart, filterDoctorsFinish } from '../actions/DoctorActions';
import MobileDoctors from '../components/MobileDoctors';
import Doctors from '../components/Doctors';
import { CLIENT_ID } from '../constants/Config';

//DB specific read/compare mathods
import {valueComparator, valueExtractor, keyWordFilters} from '../constants/item-design/naaf87561';

import { isEmpty, find, flatten } from 'lodash';

import geolib from 'geolib';

class DoctorsContainer extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchDoctorsIfNeeded(CLIENT_ID))
  }

  componentWillUpdate(nextProps, nextState){
    return false;
  }

  render() {
    return <Doctors {...this.props} />;
  }
}

const getFilteredListings = (listings, activeFilters, filters, location, activeKeyWordFilters, settings, sortBy) => {
  let locationFiltered = locationListings(listings, location);
  let sorted = sortListings(locationFiltered, sortBy);
  let keyWordFiltered = keyWordFilters(sorted, activeKeyWordFilters, settings.filters);
  let filtered = keyWordFiltered;
  activeFilters.map((filter) => {
    if (filter) {
      filtered = filterListings(filtered, filters[filter])
    } 
  })
  return filtered ? filtered : listings;
}

const sortListings = (listings, sortBy) => {
  if (!listings) {
    return
  }
  const toSort = listings;
  if (sortBy.value === 'Featured') {
    return toSort.slice().sort((a,b) => {
      return (a.featured === b.featured)? 0 : a.featured? -1 : 1;
    })
  } else {
    return toSort.slice().sort((a, b) => {
      if(a.last_name < b.last_name) return -1;
      if(a.last_name > b.last_name) return 1;
      return 0;
    });
  }
}






const filterListings = (listings, filter) => {
  return listings.filter((listing) => {
    const itemValue = valueExtractor(listing, filter.name);
    if(itemValue == null) return false;
    return valueComparator[filter.name](itemValue, filter.value);
  })
}

const locationListings = (listings, location) => {
  if (location.lat && location.long) {
    let radius = location.radius.value * 1609.34;
    return listings.filter((listing) => {
      if (listing.lat && listing.long) {
        return geolib.isPointInCircle(
          {latitude: listing.lat, longitude: listing.long},
          {latitude: location.lat, longitude: location.long},
          radius
        )
      }
    })
  }
  return listings;
}

function mapStateToProps(state) {
  const { authed, settings, entities, environment, navigator, doctors, activeFilters, filters, location, activeKeyWordFilters, sort } = state;
  const { height, isMobile } = environment;
  const { listings, loading, error } = doctors;
  const { radius, lat, long } = location;
  const { sortBy } = sort;
  
  return {
    authed,
    isMobile,
    activeKeyWordFilters,
    filters,
    filteredListings: getFilteredListings(listings, activeFilters.filters, filters, location, activeKeyWordFilters, settings, sortBy),
  };
}

export default connect(mapStateToProps)(DoctorsContainer);