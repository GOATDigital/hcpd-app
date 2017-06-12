import React, { Component } from 'react';

import { GOOGLE_MAPS_API } from '../constants/Config';
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
    const { dispatch } = this.props;
    this.setState({
      location: location,
    })
    dispatch(changeLocation(location.value));
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

  getAddress = (input) => {
    this.setState({
      isLoadingExternally: true
    })
    return fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&types=geocode&key=${GOOGLE_MAPS_API}`)

//https://github.com/Jam3/google-maps-api

      // .then(response => {
      //   console.log(response);
      //   return response.json()

      // })
      // .then((json) => {
      //   this.setState({
      //     isLoadingExternally: false
      //   })
      //   let options = [];
      //   json.predictions.map((prediction) => {
      //     options.push({value: prediction.place_id, label: `${prediction.structured_formatting.main_text}, ${prediction.structured_formatting.secondary_text} ` })
      //   });
      //   console.log(options)
      //   return { options: options };
      // });
  }

  render() {
    return (
      <div className="LocationSearchContainer flex">
        {/*<Select.Async 
          name={'Location Search'}
          loadOptions={this.getAddress}
          isLoading={this.state.isLoadingExternally}
          onChange={this.onLocationSelect}
          value={this.state.location}
          placeholder={'Search Address'}
          clearable={false}
          />*/}
          <Geosuggest />
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