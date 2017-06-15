import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import NavContainer from './NavContainer';
import DoctorsContainer from './DoctorsContainer';
import Header from '../components/Header';

import { initEnvironment } from '../actions/EnvironmentActions';
import { initNavigator } from '../actions/NavigatorActions';
import { initSettings } from '../actions/SettingsActions';

import cssStyles from '../../styles/app-specific/naaf87561.scss';
import cssStyles2 from '../../styles/app-specific/nea64356.scss';

const propTypes = {
  config: PropTypes.object
};

class AppContainer extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(initEnvironment());
    dispatch(initNavigator());
    dispatch(initSettings());
  }

  renderContent() {
    const { path } = this.props;
    switch (path[0]) {
      case 'listings':
        return <DoctorsContainer loading={true}/>;
      case 'me':
        return null;
        // return <MeContainer />;
      default:
        return null;
    }
  }
  renderTextHeader() {
    
    const header_naaf = <Header head={'Young Adult Mentor Program'} subhead={'Find a peer mentor with experience with alopecia areata'} />;
    const header_nea = <Header head={'Health Care Provider Directory'} subhead={'Find a health care provider with experience treating Eczema'} />;
    
    return (__APPID__.trim() === 'naaf87561') ? header_naaf : header_nea;
  }
  render() {
    const { height, isMobile, width } = this.props;

    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: '<!--  AppID: ' + this.props.config.TCPD_APP_ID + ' -->' }} />
          <div className={this.props.config.TCPD_APP_ID}>
          {this.renderTextHeader()}
          {this.renderContent()}
        </div>
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
