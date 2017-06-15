import React, { Component } from 'react';

import { connect } from 'react-redux';

import Select from 'react-select';

import fetch from 'isomorphic-fetch';

import Geosuggest from 'react-geosuggest';

import { changeLocation, updateRadius } from '../actions/LocationActions';

import { selectSortBy } from '../actions/SortActions'

class LocationSearchContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoadingExternally: false,
      location: this.props.location,
      radius: { value: 25, label: '25 miles' },
      feat: { value: 'Featured', label: 'Featured Listing' },
    }
  }

  onLocationSelect = (location) => {
    console.log(location)
    // const { dispatch } = this.props;
    // this.setState({
    //   location: location,
    // })
    // dispatch(changeLocation(location.value));
  }

  onRadiusChange = (radius) => {
    const { dispatch } = this.props;
    this.setState({
      radius: radius,
    })
    dispatch(updateRadius(radius));
  }

  onSortChange = (feat) => {
    const { dispatch } = this.props;
    this.setState({
      feat: feat,
    })
    dispatch(selectSortBy(feat));
  }

  rads = [
    { value: 1, label: '1 miles'},
    { value: 5, label: '5 miles'},
    { value: 10, label: '10 miles'},
    { value: 25, label: '25 miles'},
    { value: 50, label: '50 miles'},
    { value: 100, label: '100 miles'},
    { value: 200, label: '200 miles'},
  ]
  
  feats = [
    { value: 'Featured', label: 'Featured Listing' },
    { value: 'All', label: 'Any' },
  ]

  render() {
    return (
      <div className="LocationSearchContainer flex">
          <Geosuggest placeholder={'Search Address'}
                      value={this.state.location}
                      onSuggestSelect={this.onLocationSelect}/>
        <Select
          name={'Location Radius'}
          options={this.rads}
          value={this.state.radius}
          onChange={this.onRadiusChange}
          searchable={false}
          clearable={false}
          placeholder={'Radius'}
        />
        <Select
          name={'Featured Toggle'}
          options={this.feats}
          value={this.state.feat}
          onChange={this.onSortChange}
          searchable={false}
          multi={false}
          placeholder={'Sort by'}
          clearable={false}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps)(LocationSearchContainer);