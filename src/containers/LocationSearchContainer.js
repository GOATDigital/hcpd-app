import React, { Component } from 'react';

import { connect } from 'react-redux';

import Select from 'react-select';

import fetch from 'isomorphic-fetch';

import Geosuggest from 'react-geosuggest';

import { changeLocation, updateRadius } from '../actions/LocationActions';

import { selectSortBy } from '../actions/SortActions'

class LocationSearchContainer extends Component {

  rads = [
    { value: 1, label: '1 miles'},
    { value: 5, label: '5 miles'},
    { value: 10, label: '10 miles'},
    { value: 25, label: '25 miles'},
    { value: 50, label: '50 miles'},
    { value: 100, label: '100 miles'},
    { value: 200, label: '200 miles'},
  ]

  searchType = ['(cities)']

  isAdressSelected = false

  constructor(props) {
    super(props)
    this.state = {
      isLoadingExternally: false,
      location: this.props.location,
      radius: { value: 25, label: '25 miles' },
      isAdressSelected: false,
    }
  }

  onLocationSelect = (location) => {
    const { dispatch } = this.props;
    this._geoSuggest.blur();
    this.isAdressSelected = true;
    this.setState({
      location: location,
      isAdressSelected: true,
    })
    dispatch(changeLocation(location));
  }

  onRadiusChange = (radius) => {
    const { dispatch } = this.props;
    this.setState({
      radius: radius,
    })
    dispatch(updateRadius(radius));
  }

  clearLocationField() {
      this.setState({
      isAdressSelected: false,
    })

    this._geoSuggest.clear();
    this._geoSuggest.blur();
    const { dispatch } = this.props;
    
    dispatch(changeLocation(''));
  }

  render() {

    let clearButtonEl = (this.state.isAdressSelected ? <button className='clear-geo Select-clear-zone' onClick={() => this.clearLocationField()}>×</button> : '');

    return (
      <div className="LocationSearchContainer flex">
          <Geosuggest ref={el=>this._geoSuggest=el}
                      placeholder={'Search Address'}
                      value={this.state.location}
                      types={this.searchType}
                      country={'us'}
                      onSuggestSelect={this.onLocationSelect}/>
            {clearButtonEl}
        <Select
          name={'Location Radius'}
          options={this.rads}
          value={this.state.radius}
          onChange={this.onRadiusChange}
          searchable={false}
          clearable={false}
          placeholder={'Radius'}
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