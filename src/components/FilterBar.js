import React, { Component } from 'react';

import SelectContainer from '../containers/SelectContainer';
import LocationSearchContainer from '../containers/LocationSearchContainer';
import KeyWordSearchContainer from '../containers/KeyWordSearchContainer';
import Button from '../components/Button';
import Input from '../components/Input';

import { toggleFilters } from '../actions/FilterActions';
import { clearFilters } from '../actions/FilterActions';

class FilterBar extends Component {

  activeFilters = {};

  handleChange = (name, values) => {
    this.props.handleChange(name,values);
  }

  handleClick = () => {
    const { dispatch } = this.props;
    dispatch(toggleFilters())
  }

  clearFilters = () => {
    const { dispatch } = this.props;
    dispatch(clearFilters());
  }

  handleKeySearch = (event) => {
    this.setState({ value: event.target.value })
  }

  renderStateFilter() {
    const { usStates } = this.props
    return (
      <SelectContainer
        name={'State'}
        options={usStates}
        multi={true}
        handleChange={this.handleChange}
        clearable={true}
        searchable={true}
      />
    )
  }

  renderToggleButton() {
    return (
      <Button
        className='toggle-filters-text'
        text={this.props.filtersVisible ? 'Show Less Filters' : 'Show More Filters'}
        onClick={this.handleClick}
      />
    )
  }

  renderClearFiltersButton = () => {
    return (
      <Button
        text={'Clear Filters'}
        onClick={this.clearFilters}
      />
    )
  }

  renderTestInput() {
    const { filters } = this.props;
    let keywordFilters = filters.filter(filter => filter.type === 'Keyword');
    return (
      keywordFilters.map((filter) => {
        return (
          <KeyWordSearchContainer 
            key={filter.name}
            filter={filter}
          />
        )
      })
    )
  }

  renderSelectFilters() {
    const { filters } = this.props;
    return (
      filters.map((filter) => {
        if (filter.type == 'Checkbox' || filter.type == 'Select') {
          return (
            <SelectContainer
              key={filter.name}
              name={filter.name}
              options={filter.options}
              multi={filter.type == 'Checkbox' ? true : false}
              handleChange={this.handleChange}
              clearable={false}
              searchable={filter.type == 'Checkbox' ? true : false}
            />
            );
        }
      })
    )
  }

  renderKeyWordFilters = () => {
    const { filters } = this.props;
     return filters.forEach((filter) => {
      if (filter.type == 'Keyword') {
        return (
      <Button
        text={this.props.filtersVisible ? 'Show Less Filters' : 'Show More Filters'}
        onClick={this.handleClick}
      />
      )
      }
    })
  }

  render() {
    return (
      <div className="FilterBar">
        <div className="statesFilter">
          <p className='find-provider-text'>Find a Provider Near You</p>
          <LocationSearchContainer />
          <div className="filterToggleButton">
            {this.renderToggleButton()}
          </div>
        </div>
        <div className="customFilters" style={{display: (this.props.filtersVisible ? 'flex' : 'none')}}>
          {this.renderSelectFilters()}
          {this.renderTestInput()}
        </div>
      </div>
    )
  }
}

export default FilterBar;