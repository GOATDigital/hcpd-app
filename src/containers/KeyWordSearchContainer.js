import React, { Component } from 'react';

import { connect } from 'react-redux';

import { updateKeyWords } from '../actions/KeyWordFilterActions';

class KeyWordSearchContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ""};
  }

  handleKeySearch = (event) => {
    const { dispatch } = this.props;
    this.setState({value: event.target.value});
    dispatch(updateKeyWords(event.target.value, this.props.filter));
  }

  render() {
    return (
      <div className="space KeyWordSearchContainer">
        <p className="label">{this.props.filter.name}</p>
        <input
          type="text"
          placeholder={'Type to Search'}
          onChange={this.handleKeySearch}
          value={this.state.value}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps)(KeyWordSearchContainer);