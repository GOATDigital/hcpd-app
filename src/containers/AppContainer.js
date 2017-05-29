import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import NavContainer from './NavContainer';
import DoctorsContainer from './DoctorsContainer';
import Header from '../components/Header';

import { initEnvironment } from '../actions/EnvironmentActions';
import { initAuth } from '../actions/AuthedActions';
import { initNavigator } from '../actions/NavigatorActions';
import { initSettings } from '../actions/SettingsActions';

const propTypes = {
  config: PropTypes.object
};

class AppContainer extends Component {

  componentDidMount() {
    window.appid_tmp = this.props.config.TCPD_APP_ID;
    const { dispatch } = this.props;
    dispatch(initEnvironment());
    dispatch(initAuth());
    dispatch(initNavigator());
    dispatch(initSettings());
  }

  renderContent() {
    const { path } = this.props;
    switch (path[0]) {
      case 'listings':
        return <DoctorsContainer />;
      case 'me':
        return null;
        // return <MeContainer />;
      default:
        return null;
    }
  }
  render() {
    const { height, isMobile, width } = this.props;

    return (
      <div>
        {this.props.config.TCPD_APP_ID}
        <Header head={'Health Care Provider Directory'} subhead={'Find a health care provider with experience treating Eczema'} />
        {this.renderContent()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { environment, navigator } = state;
  const { height, isMobile, width } = environment;
  const { path } = navigator.route;
  return {
    height,
    isMobile,
    path,
    width,
  };
}

AppContainer.propTypes = propTypes;

export default connect(mapStateToProps)(AppContainer);
