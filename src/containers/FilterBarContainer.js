import React, { Component } from 'react';
import { connect } from 'react-redux';

import FilterBar from '../components/FilterBar';

import parseFilters from '../actions/FilterActions';

class FilterBarConainer extends Component {

  activeFilters = [];

  handleChange = (name, values) => {
    const { dispatch } = this.props;
    if (values && values.length > 0) {
      this.activeFilters[name] = values.map(val => val.id)
    } else {
      this.activeFilters[name] = values.id;
    }
    dispatch(parseFilters(this.activeFilters));
  }

  render() {
    const { isMobile } = this.props;
    const { settings } = this.props;
    return (
      <FilterBar {...this.props} handleChange={this.handleChange} />
    )
  }
}

function mapStateToProps(state) {
  const { settings, environment, navigator, filterUI } = state;
  const { isMobile } = environment;
  const { query } = navigator.route;
  const { filters } = settings;
  const { usStates } = settings;
  const { filtersVisible } = filterUI;

  return {
    filtersVisible,
    usStates,
    filters,
    isMobile,
    query,
  }
}

export default connect(mapStateToProps)(FilterBarConainer);