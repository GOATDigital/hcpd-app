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

import {header_naaf} from '../custom/naaf/constants';
import {header_nea} from '../custom/nea/constants';

const header_data = (__APPID__ === 'naaf87561') ? header_naaf : header_nea;

console.log(__APPID__.length, JSON.stringify(__APPID__) == 'naaf87561');

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
    return <Header head={header_data.head} subhead={header_data.subhead} />;
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
