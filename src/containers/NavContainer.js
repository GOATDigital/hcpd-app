import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MobileNav from '../components/MobileNav';
import Nav from '../components/Nav';

const propTypes = {
  isMobile: PropTypes.bool,
};

class NavContainer extends Component {
  render() {
    const { isMobile } = this.props;
    if (isMobile) {
      return <MobileNav {...this.props} />;
    }

    return <Nav {...this.props} />;
  }
}

function mapStateToProps(state) {
  const { environment, navigator } = state;
  const { isMobile } = environment;

  return {
    isMobile,
    navigator,
  };
}

NavContainer.propTypes = propTypes;

export default connect(mapStateToProps)(NavContainer);